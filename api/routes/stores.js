const express = require('express');
const { getStores } = require('../controllers/stores');
const router = express.Router();

router.get('/', getStores);

module.exports = router;
