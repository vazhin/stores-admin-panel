const { Category, Product } = require('../models');
const dbService = require('../services/db');

exports.createCategory = async (req, res, next) => {
  const { name, image, storeId } = req.body;
  try {
    //
    res.status(200).json();
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};

exports.getProductsInCategory = async (req, res, next) => {
  const pageNum = req.query.page ? req.query.page : 1;
  const categoryId = req.params.categoryId;
  try {
    const products = await dbService.getAllById(
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
