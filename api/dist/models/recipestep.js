"use strict";

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var recipestepSchema = new Schema({
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
    type: String
  },
  createdAt: {
    type: Date,
    "default": Date.now
  }
});
var RecipeStep = mongoose.model('RecipeStep', recipestepSchema);
module.exports = RecipeStep;