const Recipe = require("./models/Recipe");

const fakeRecipes = [
  {
    id: 1,
    name: "Garlic Rice",
    description: "A simple rice dish flavored with garlic.",
    ingredients: ["garlic", "rice"],
    estimatedTime: 20,
    servings: 2,
    difficulty: "easy",
    type: "main course",
  },
  {
    id: 2,
    name: "Cheesy Carrot Rice",
    description: "Rice mixed with carrots and melted cheese.",
    ingredients: ["rice", "carrots", "cheese"],
    estimatedTime: 25,
    servings: 4,
    difficulty: "easy",
    type: "side dish",
  },
  {
    id: 3,
    name: "Beef and Garlic Stir Fry",
    description: "Beef stir fried with garlic and carrots.",
    ingredients: ["beef", "garlic", "carrots"],
    estimatedTime: 30,
    servings: 3,
    difficulty: "medium",
    type: "main course",
  },
  {
    id: 4,
    name: "Peas and Cheese Rice",
    description: "A creamy rice dish with peas and cheese.",
    ingredients: ["rice", "peas", "cheese"],
    estimatedTime: 20,
    servings: 2,
    difficulty: "easy",
    type: "side dish",
  },
  {
    id: 5,
    name: "Sweet Garlic Carrots",
    description: "Carrots glazed with sugar and garlic.",
    ingredients: ["carrots", "sugar", "garlic"],
    estimatedTime: 15,
    servings: 2,
    difficulty: "easy",
    type: "side dish",
  },
  {
    id: 6,
    name: "Beef and Peas Rice",
    description: "Rice with beef and peas for a hearty meal.",
    ingredients: ["rice", "beef", "peas"],
    estimatedTime: 30,
    servings: 4,
    difficulty: "medium",
    type: "main course",
  },
  {
    id: 7,
    name: "Cheesy Garlic Bread",
    description: "Bread topped with garlic and cheese (use rice as base).",
    ingredients: ["garlic", "cheese", "rice"],
    estimatedTime: 15,
    servings: 2,
    difficulty: "easy",
    type: "side dish",
  },
  {
    id: 8,
    name: "Carrot and Pea Medley",
    description: "A simple medley of carrots and peas.",
    ingredients: ["carrots", "peas"],
    estimatedTime: 10,
    servings: 2,
    difficulty: "easy",
    type: "side dish",
  },
  {
    id: 9,
    name: "Sweet Rice Pudding",
    description: "Rice pudding sweetened with sugar.",
    ingredients: ["rice", "sugar"],
    estimatedTime: 25,
    servings: 3,
    difficulty: "easy",
    type: "dessert",
  },
  {
    id: 10,
    name: "Beef and Cheese Skillet",
    description: "Beef cooked with cheese and carrots.",
    ingredients: ["beef", "cheese", "carrots"],
    estimatedTime: 35,
    servings: 4,
    difficulty: "medium",
    type: "main course",
  },
  {
    id: 11,
    name: "Garlic Beef Pilaf",
    description: "A savory pilaf with beef, garlic, and rice.",
    ingredients: ["beef", "garlic", "rice"],
    estimatedTime: 40,
    servings: 4,
    difficulty: "medium",
    type: "main course",
  },
  {
    id: 12,
    name: "Cheesy Pea Risotto",
    description: "Creamy risotto with peas and cheese.",
    ingredients: ["rice", "peas", "cheese"],
    estimatedTime: 35,
    servings: 3,
    difficulty: "medium",
    type: "main course",
  },
  {
    id: 13,
    name: "Sweet Carrot Delight",
    description: "A sweet dessert made from carrots and sugar.",
    ingredients: ["carrots", "sugar"],
    estimatedTime: 20,
    servings: 2,
    difficulty: "easy",
    type: "dessert",
  },
  {
    id: 14,
    name: "Beef and Carrot Stew",
    description: "Hearty stew with beef and carrots.",
    ingredients: ["beef", "carrots"],
    estimatedTime: 50,
    servings: 5,
    difficulty: "medium",
    type: "main course",
  },
  {
    id: 15,
    name: "Garlic Peas Stir Fry",
    description: "Quick stir fry of peas and garlic.",
    ingredients: ["peas", "garlic"],
    estimatedTime: 12,
    servings: 2,
    difficulty: "easy",
    type: "side dish",
  }
];

async function generateFakeData() {
  const recipes = await Recipe.find();
  if (recipes.length) {
    console.log("Fake data already exists. Skipping generation.");
    return;
  }

  console.log("Generating fake data...");
  await Recipe.insertMany(fakeRecipes);
  console.log("Fake data generated successfully.");
}

module.exports = generateFakeData;
