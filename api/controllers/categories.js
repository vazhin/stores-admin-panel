const { Category, Product, Store } = require('../models');
const db = require('../services/db');

exports.createCategory = async (req, res, next) => {
  const { name, storeId } = req.body;
  const image = req.file ? req.file.path : '';
  try {
    await db.increaseCounter(Store, storeId, 'stores');
    const category = await db.create(Category, {
      name,
      image,
      storeId: parseInt(storeId),
    });
    res.status(200).json(category);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};

exports.editCategory = async (req, res, next) => {
  const { name } = req.body;
  const image = req.file ? req.file.path : '';
  const categoryId = req.params.categoryId;
  try {
    const category = await db.edit(Category, categoryId, [
      { key: 'name', value: name },
      { key: 'image', value: image },
    ]);
    res.status(200).json(category);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};

exports.getProductsInCategory = async (req, res, next) => {
  const pageNum = req.query.page ? req.query.page : 1;
  const categoryId = req.params.categoryId;
  try {
    const products = await db.getAllById(
      Product,
      Category,
      { field: 'categoryId', value: categoryId },
      parseInt(pageNum)
    );
    res.status(200).json(products);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};

exports.getCategory = async (req, res, next) => {
  const categoryId = req.params.categoryId;
  try {
    const category = await db.getById(categoryId, Category);
    res.status(200).json(category);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};
