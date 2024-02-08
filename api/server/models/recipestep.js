const mongoose = require('mongoose');
const { Schema } = mongoose;

const recipestepSchema = new Schema({
    recipe: {
        type: String
    },
    title: {
        type: String
    },
    step: {
        type: Number
    },
    imageUrl: String,
    description: {
        type: String,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
});

const RecipeStep = mongoose.model('RecipeStep', recipestepSchema);

module.exports = RecipeStep;