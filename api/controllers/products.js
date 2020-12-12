const { Product, Category } = require('../models');
const db = require('../services/db');

exports.createProduct = async (req, res, next) => {
  const { name, price, quantity, categoryId } = req.body;
  const image = req.file ? req.file.path : '';
  try {
    await db.increaseCounter(Category, categoryId, 'categories');
    const product = await db.create(Product, {
      name,
      image,
      price: parseInt(price),
      quantity: parseInt(quantity),
      categoryId: parseInt(categoryId),
    });
    res.status(200).json(product);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};

exports.getProduct = async (req, res, next) => {
  const productId = req.params.productId;
  try {
    const product = await db.getById(productId, Product);
    res.status(200).json(product);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};

exports.editProduct = async (req, res, next) => {
  const { name, price, quantity } = req.body;
  const image = req.file ? req.file.path : '';
  const productId = req.params.productId;
  try {
    const product = await db.edit(Product, productId, [
      { key: 'name', value: name },
      { key: 'price', value: price },
      { key: 'quantity', value: quantity },
      { key: 'image', value: image },
    ]);
    res.status(200).json(product);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};
