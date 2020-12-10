const express = require('express');
const { getHomepage } = require('../controllers');
const router = express.Router();

router.get('/', getHomepage);

module.exports = router;
