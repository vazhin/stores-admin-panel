const express = require('express');
const { getProduct, createProduct } = require('../controllers/products');
const router = express.Router();

router.post('/', createProduct);
router.get('/:productId', getProduct);

module.exports = router;
