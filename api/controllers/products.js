const { Product } = require('../models');
const dbService = require('../services/db');

exports.createProduct = async (req, res, next) => {
  const { name, image, price, quantity, categoryId } = req.body;
  try {
    //
    res.status(200).json();
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};

exports.getProduct = async (req, res, next) => {
  const productId = req.params.productId;
  try {
    const product = await dbService.getById(productId, Product);
    res.status(200).json(product);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};
