const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
var format = req.params.format,
type = req.params.type;

  // find all categories
  Category.findAll({include:[Product]}) 
  .then((parameterOne) => {const express = require('express');
  const routes = require('./routes');
  // import sequelize connection
  const sequelize = require('./config/connection/');
  const app = express();
  const PORT = process.env.PORT || 3001;
  
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  
  app.use(routes);
  
  // sync sequelize models to the database, then turn on the server
  app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
  });
    res.json(parameterOne)
  })

  // be sure to include its associated Products
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
const type = req.params.id;
  // be sure to include its associated Products
});

router.post('/', (req, res) => {
  // create a new category
});

router.put('/:id', (req, res) => {
const  type = req.params.id;
  // update a category by its `id` value
});

router.delete('/:id', (req, res) => {
const  type = req.params.id;
  // delete a category by its `id` value
});

module.exports = router;
