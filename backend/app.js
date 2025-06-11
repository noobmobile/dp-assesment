require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const recipeRoutes = require('./routes/recipes');
const generateFakeData = require('./fake-data');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/recipes', recipeRoutes);

const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI;


mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log("MongoDB connected");
  generateFakeData().then(() => {
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
}).catch(err => console.error(err));
