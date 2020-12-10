const express = require('express');
const { getProduct } = require('../controllers/products');
const router = express.Router();

router.get('/:productId', getProduct);

module.exports = router;
