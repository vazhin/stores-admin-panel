const { Store, Category } = require('../models');
const dbService = require('../services/db');

exports.createStore = async (req, res, next) => {
  const { name, logo } = req.body;
  try {
    //
    res.status(200).json();
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};

exports.getStores = async (req, res, next) => {
  const pageNum = req.query.page ? req.query.page : 1;
  try {
    const stores = await dbService.getAll(Store, parseInt(pageNum));
    res.status(200).json(stores);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};

exports.getCategoriesInStore = async (req, res, next) => {
  const pageNum = req.query.page ? req.query.page : 1;
  const storeId = req.params.storeId;
  try {
    const categories = await dbService.getAllById(
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
