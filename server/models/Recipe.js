const mongoose = require('mongoose');

const recipeSchema = new Schema({
    title: {
      type: String,
      required: true,
      trim: true
    },
    description: {
      type: String,
      trim: true
    },
    ingredients: [{
      type: String,
      required: true
    }],
    instructions: [{
      type: String,
      required: true
    }],
    category: {
      type: String,
      required: true,
      enum: ['VEGETARIAN', 'MEAT_BASED', 'SEAFOOD', 'DESSERT']
    },
    prepTime: {
      type: Number
    },
    cookTime: {
      type: Number
    },
    servings: {
      type: Number
    },
    image: {
      type: String
    },
    createdBy: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    shareableLink: {
      type: String
    },
    createdAt: {
      type: Date,
      default: Date.now
    }
  });


const Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;