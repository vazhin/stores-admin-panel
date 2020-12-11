const express = require('express');
const router = express.Router();
const multer = require('multer');
const {
  getProduct,
  editProduct,
  createProduct,
} = require('../controllers/products');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads/products');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  },
});

const upload = multer({ storage: storage });

router.post('/', upload.single('image'), createProduct);
router.get('/:productId', getProduct);
router.put('/:productId', editProduct);

module.exports = router;
