const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    ingredients: [{ type: String, required: true }],
    estimatedTime: { type: Number, required: true }, 
    servings: { type: Number, required: true },
    difficulty: { type: String, enum: ['easy', 'medium', 'hard'], required: true },
    type: { type: String, enum: ['main course', 'side dish', 'dessert'], required: true }
});

module.exports = mongoose.model('Recipe', recipeSchema);
