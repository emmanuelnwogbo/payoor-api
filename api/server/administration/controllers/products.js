import express from 'express';
import multer from 'multer';

import Product from '../../models/product';
import RecipeStep from '../../models/recipestep';

import s3uploadimage from '../../imageservice/s3uploadimage';

import getStringFromObjectId from '../../utilities/getStringFromObjectId';

const products = express();

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

products.get('/products/inventory/', async (req, res) => {
    try {
        const { category } = req.query;

        let productslist;

        if (category && category !== 'all') {
            productslist = await Product.find({ category });
        } else {
            productslist = await Product.find();
        }

        res.status(200).send({
            items: [...productslist]
        })
    } catch (error) {
        console.error('Internal Server Error:', error);

        res.status(500).send({ message: 'Internal Server Error', error: error.message });
    }
});

products.post('/product/inventory/create', async (req, res) => {
    try {
        const { itemname, description, price, category, stockQuantity, imageUrl, bestseller } = req.body;

        const productItem = new Product({ itemname, description, price, category, stockQuantity, imageUrl, bestseller });
        productItem.itemname = `item payoor_id ${productItem._id}`

        const savedProduct = await productItem.save();

        res.status(201).send({ item: savedProduct });

    } catch (error) {
        console.error('Internal Server Error:', error);

        res.status(500).send({ message: 'Internal Server Error', error: error.message });
    }
});

products.put('/product/inventory/update', async (req, res) => {
    try {
        const { productid, itemattribute } = req.query;

        const { value } = req.body;

        const updateBody = {};
        updateBody[itemattribute] = value;

        const productToUpdate = await Product.findByIdAndUpdate(productid, updateBody, {
            new: true,
            runValidators: true
        });

        if (!productToUpdate) {
            res.status(404).send({ message: 'No product found with the given ID' });
            return;
        }

        res.status(200).send({ item: productToUpdate });
    } catch (error) {
        console.error('Internal Server Error:', error);

        res.status(500).send({ message: 'Internal Server Error', error: error.message });
    }
});

products.post('/product/inventory/imageupload', upload.single('file'), async (req, res) => {
    try {
        const { productid } = req.query;
        const file = req.file;

        const imageUrl = await s3uploadimage(file);
        const productToUpdate = await Product.findByIdAndUpdate(productid, { imageUrl }, {
            new: true,
            runValidators: true
        });

        if (!productToUpdate) {
            res.status(404).send({ message: 'No product found with the given ID' });
            return;
        }

        res.status(200).send({ item: productToUpdate });
    } catch (error) {
        res.status(500).send({ message: 'Internal Server Error', error: error.message });
    }
});

products.delete('/product/inventory/delete', async (req, res) => {
    try {
        const { productid } = req.query;

        const deletedDoc = await Product.findOneAndDelete({ _id: productid });

        if (deletedDoc) {
            res.status(200).send({ message: 'Item deleted successfully' });
        } else {
            res.status(404).send({ message: 'Item not found' });
        }
    } catch (error) {
        console.log(error);
        res.status(500).send({ message: 'Internal Server Error', error: error.message });
    }
});

products.post('/product/inventory/addingredient', async (req, res) => {
    try {
        const { ingredient, recipe } = req.query;

        const recipeitem = await Product.findOne({ _id: recipe });
        const ingredientitem = await Product.findOne({ _id: ingredient });
        const ingredients = [...recipeitem.ingredients, getStringFromObjectId(ingredientitem._id)];

        const productToUpdate = await Product.findByIdAndUpdate(recipeitem._id, { ingredients }, {
            new: true,
            runValidators: true
        });

        if (!productToUpdate) {
            res.status(404).send({ message: 'No product found with the given ID' });
            return;
        }

        res.status(200).send({ item: productToUpdate });
    } catch (error) {
        res.status(500).send({ message: 'Internal Server Error', error: error.message });
    }
});

products.post('/product/inventory/removeingredient', async (req, res) => {
    try {
        const { ingredient, recipe } = req.query;

        const recipeitem = await Product.findOne({ _id: recipe });
        const ingredientitem = await Product.findOne({ _id: ingredient });
        const ingredients = recipeitem.ingredients.filter(ingritem => ingritem !== getStringFromObjectId(ingredientitem._id));

        const productToUpdate = await Product.findByIdAndUpdate(recipeitem._id, { ingredients }, {
            new: true,
            runValidators: true
        });

        if (!productToUpdate) {
            res.status(404).send({ message: 'No product found with the given ID' });
            return;
        }

        res.status(200).send({ item: productToUpdate });
    } catch (error) {
        res.status(500).send({ message: 'Internal Server Error', error: error.message });
    }
});

products.get('/product/inventory/ingredients', async (req, res) => {
    try {
        const { recipe } = req.query;

        const recipeitem = await Product.findOne({ _id: recipe });
        const ingredients = recipeitem.ingredients;
        const items = []

        for (const ingredient of ingredients) {
            const product = await Product.findOne({ _id: ingredient });
            if (product) {
                items.push(product);
            }
        }

        res.status(200).send({ item: items, ingredientsids: ingredients });
    } catch (error) {
        res.status(500).send({ message: 'Internal Server Error', error: error.message });
    }
});

products.post('/product/inventory/create/ingredientstep', async (req, res) => {
    try {
        const { recipe } = req.query;

        const recipeitem = await Product.findOne({ _id: recipe });

        if (recipeitem) {
            const recipestep = new RecipeStep({
                recipe
            });

            const recipestepdoc = await recipestep.save();
            const steps = [...recipeitem.steps, recipestepdoc._id.toString()];

            const productToUpdate = await Product.findByIdAndUpdate(recipeitem._id, { steps }, {
                new: true,
                runValidators: true
            });

            if (!productToUpdate) {
                res.status(404).send({ message: 'Failed to update the product' });
                return;
            }

            res.status(200).send({ item: productToUpdate });
        }
    } catch (error) {
        res.status(500).send({ message: 'Internal Server Error', error: error.message });
    }
});

products.get('/product/inventory/get/ingredientsteps', async (req, res) => {
    try {
        const { recipe } = req.query;

        const recipeitem = await Product.findOne({ _id: recipe });

        if (recipeitem) {

            const recipesteps = await RecipeStep.find({ recipe });

            res.status(200).send({ item: recipesteps });
        }
    } catch (error) {
        res.status(500).send({ message: 'Internal Server Error', error: error.message });
    }
});

products.delete('/product/inventory/delete/ingredientstep', async (req, res) => {
    try {
        const { recipestep, recipe } = req.query;

        const recipestepitem = await RecipeStep.findOne({ _id: recipestep });
        const recipeitem = await Product.findOne({ _id: recipe });
        let steps = recipeitem.steps;
        steps = steps.filter(step => step !== recipestepitem._id.toString())

        recipeitem.steps = steps;
        await recipeitem.save();
        const result = await RecipeStep.deleteOne({ _id: recipestep });

        if (result.deletedCount === 0) {
            res.status(500).send({ message: 'Internal Server Error', error: error.message });
        } else {
            res.status(200).send({ message: 'item deleted' });
        }
    } catch (error) {
        res.status(500).send({ message: 'Internal Server Error', error: error.message });
    }
});

products.put('/product/inventory/update/ingredientstep', async (req, res) => {
    try {
        const { recipestep } = req.query;

        const recipeStepToUpdate = await RecipeStep.findByIdAndUpdate(recipestep, { ...req.body }, {
            new: true,
            runValidators: true
        });

        if (!recipeStepToUpdate) {
            res.status(404).send({ message: 'Failed to update the recipe step' });
            return;
        }

        res.status(200).send({ item: recipeStepToUpdate });
    } catch (error) {
        res.status(500).send({ message: 'Internal Server Error', error: error.message });
    }
});

products.post('/product/inventory/imageupload/ingredientstep', upload.single('file'), async (req, res) => {
    try {
        const { recipestep } = req.query;
        const file = req.file;

        const imageUrl = await s3uploadimage(file);

        const recipeStepToUpdate = await RecipeStep.findByIdAndUpdate(recipestep, { imageUrl }, {
            new: true,
            runValidators: true
        });

        if (!recipeStepToUpdate) {
            res.status(404).send({ message: 'No recipe step found with the given ID' });
            return;
        }

        res.status(201).send({ item: recipeStepToUpdate });
    } catch (error) {
        res.status(500).send({ message: 'Internal Server Error', error: error.message });
    }
});

//const result = await RecipeStep.deleteMany({});

export default products;