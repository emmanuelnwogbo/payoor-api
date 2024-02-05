"use strict";

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var categorySchema = new Schema({
  image: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  }
});
var Category = mongoose.model('Category', categorySchema);
module.exports = Category;