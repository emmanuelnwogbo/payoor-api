import express from 'express';
import multer from 'multer';


import Product from '../../models/product';

import s3uploadimage from '../../imageservice/s3uploadimage';

const products = express();

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

products.get('/products/inventory/', async (req, res) => {
    try {
        const productslist = await Product.find();

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
})

export default products;