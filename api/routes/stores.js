const express = require('express');
const {
  createStore,
  getStores,
  getCategoriesInStore,
} = require('../controllers/stores');
const router = express.Router();

router.post('/', createStore);
router.get('/', getStores);
router.get('/:storeId', getCategoriesInStore);

module.exports = router;
