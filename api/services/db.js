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

  async getAllById(model, relatedModel, foreignKey, pageNum) {
    return new Promise(async (resolve, reject) => {
      try {
        const limit = 8;

        const parent = await relatedModel.findOne({
          where: { uuid: foreignKey.value },
        });

        if (!parent) {
          resolve({ items: [], itemCount: 0, pageNum, pageCount: 0 });
        }

        const criteria = {};
        criteria[foreignKey.field] = parent.id;

        const result = await model.findAndCountAll({
          offset: (pageNum - 1) * limit,
          limit,
          order: [['createdAt', 'DESC']],
          where: criteria,
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

  async getById(uuid, model) {
    return new Promise(async (resolve, reject) => {
      try {
        const item = await model.findOne({ where: { uuid } });
        resolve(item);
      } catch (err) {
        reject(err);
      }
    });
  }

  async create(model, data) {
    return new Promise(async (resolve, reject) => {
      try {
        const item = await model.create(data);
        resolve(item);
      } catch (err) {
        reject(err);
      }
    });
  }

  async increaseCounter(model, id, table) {
    return new Promise(async (resolve, reject) => {
      try {
        const item = await model.findOne({ where: { id } });
        if (table === 'stores') item.numOfCategories = item.numOfCategories + 1;
        if (table === 'categories') item.numOfProducts = item.numOfProducts + 1;
        await item.save();

        resolve(item);
      } catch (err) {
        reject(err);
      }
    });
  }

  async edit(model, uuid, newData) {
    return new Promise(async (resolve, reject) => {
      try {
        const item = await model.findOne({ where: { uuid } });
        newData.forEach((field) => {
          item[field.key] = field.value;
        });
        await item.save();

        resolve(item);
      } catch (err) {
        reject(err);
      }
    });
  }
}

module.exports = new DatabaseService();
