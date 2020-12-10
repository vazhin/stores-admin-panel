class DatabaseService {
  async getAll(model, pageNum) {
    return new Promise(async (resolve, reject) => {
      try {
        const limit = 8;
        const result = await model.findAndCountAll({
          offset: (pageNum - 1) * limit,
          limit,
          order: [['createdAt', 'DESC']],
        });

        const items = result.rows;
        const itemCount = result.count;
        const pageCount = Math.ceil(itemCount / limit);

        resolve({ items, itemCount, pageNum, pageCount });
      } catch (err) {
        reject(err);
      }
    });
  }
}

module.exports = new DatabaseService();
