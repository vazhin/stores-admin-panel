const express = require('express');
const { getProductsInCategory } = require('../controllers/categories');
const router = express.Router();

router.get('/:categoryId', getProductsInCategory);

module.exports = router;
