const express = require('express');
const router = express.Router();
const multer = require('multer');
const {
  createCategory,
  getProductsInCategory,
} = require('../controllers/categories');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads/categories');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  },
});

const upload = multer({ storage: storage });

router.post('/', upload.single('image'), createCategory);
router.get('/:categoryId', getProductsInCategory);

module.exports = router;
