const express = require('express');
const {
  createCategory,
  getProductsInCategory,
} = require('../controllers/categories');
const router = express.Router();

router.post('/', createCategory);
router.get('/:categoryId', getProductsInCategory);

module.exports = router;
