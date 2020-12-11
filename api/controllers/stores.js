const { Store, Category } = require('../models');
const db = require('../services/db');

exports.createStore = async (req, res, next) => {
  const { name } = req.body;
  const logo = req.file ? req.file.path : '';
  try {
    const store = await db.create(Store, { name, logo });
    res.status(200).json(store);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};

exports.getStores = async (req, res, next) => {
  const pageNum = req.query.page ? req.query.page : 1;
  try {
    const stores = await db.getAll(Store, parseInt(pageNum));
    res.status(200).json(stores);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};

exports.editStore = async (req, res, next) => {
  const { name } = req.body;
  const storeId = req.params.storeId;
  try {
    const store = await db.edit(Store, storeId, [{ key: 'name', value: name }]);
    res.status(200).json(store);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};

exports.getCategoriesInStore = async (req, res, next) => {
  const pageNum = req.query.page ? req.query.page : 1;
  const storeId = req.params.storeId;
  try {
    const categories = await db.getAllById(
      Category,
      Store,
      { field: 'storeId', value: storeId },
      parseInt(pageNum)
    );
    res.status(200).json(categories);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};
