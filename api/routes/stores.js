const express = require('express');
const router = express.Router();
const multer = require('multer');
const {
  editStore,
  getStores,
  createStore,
  getCategoriesInStore,
} = require('../controllers/stores');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads/stores');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  },
});

const upload = multer({ storage: storage });

router.post('/', upload.single('logo'), createStore);
router.get('/', getStores);
router.get('/:storeId', getCategoriesInStore);
router.put('/:storeId', upload.single('logo'), editStore);

module.exports = router;
