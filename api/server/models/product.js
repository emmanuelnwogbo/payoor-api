const mongoose = require('mongoose');
const { Schema } = mongoose;

const productSchema = new Schema({
    itemname: {
        type: String,
        unique: true
    },
    description: {
        type: String,
    },
    price: {
        type: Number,
    },
    category: {
        type: String,
    },
    stockQuantity: {
        type: Number,
        default: 0,
    },
    imageUrl: String,
    bestseller: {
        type: Boolean,
        default: false
    },
    tags: {
        type: Array,
        default: []
    },
    ingredients: {
        type: Array,
        default: []
    },
    steps: {
        type: Array,
        default: []
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
