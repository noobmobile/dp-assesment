const express = require('express');
const router = express.Router();
const Recipe = require('../models/Recipe');

// Retrieve a list of recipes, optionally filtered by ingredients.
router.get('/', async (req, res) => {
    try {
        const { ingredient = '' } = req.query;
        const ingredients = ingredient ? ingredient.split(',').map(i => i.trim()).filter(Boolean) : [];
        let filter = {};
        if (ingredients.length > 0) {
            filter.ingredients = { $all: ingredients };
        }
        const recipes = await Recipe.find(filter);
        res.json(recipes);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Retrieve a list of all unique ingredients used in recipes.
router.get('/ingredients', async (req, res) => {
    try {
        const ingredients = await Recipe.distinct('ingredients');
        res.json(ingredients);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Retrieve a single recipe by its unique ID.
router.get('/:id', async (req, res) => {
    try {
        const recipe = await Recipe.findById(req.params.id);
        if (!recipe) {
            return res.status(404).json({ message: 'Recipe not found' });
        }
        res.json(recipe);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
