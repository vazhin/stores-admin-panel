const express = require('express');
const { getStores, getStoreCategories } = require('../controllers/stores');
const router = express.Router();

router.get('/', getStores);
router.get('/:storeId', getStoreCategories);

module.exports = router;
