const express = require('express');
const { getHomepage } = require('../controllers');
const router = express.Router();
const storesRouter = require('./stores');
const productsRouter = require('./products');
const categoriesRouter = require('./categories');

router.get('/', getHomepage);

module.exports = {
  indexRouter: router,
  storesRouter,
  productsRouter,
  categoriesRouter,
};
