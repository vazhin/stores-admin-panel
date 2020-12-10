const { Store } = require('../models');

exports.getStores = async (req, res, next) => {
  const pageNum = req.query.page ? req.query.page : 1;
  const limit = 8;
  try {
    const result = await Store.findAndCountAll({
      offset: (pageNum - 1) * limit,
      limit,
      order: [['createdAt', 'DESC']],
    });

    const stores = result.rows;
    const numOfStores = result.count;
    const numOfPages = Math.ceil(numOfStores / limit);

    res.status(200).json({ stores, numOfStores, numOfPages });
  } catch (err) {
    res.status(500).json(err);
  }
};
