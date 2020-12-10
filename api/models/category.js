'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Category extends Model {
    static associate({ Product, Store }) {
      this.hasMany(Product, { foreignKey: 'categoryId', as: 'products' });
      this.belongsTo(Store, { foreignKey: 'storeId', as: 'store' });
    }
  }
  Category.init(
    {
      uuid: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      image: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      numOfProducts: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
      storeId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'Category',
      tableName: 'categories',
    }
  );
  return Category;
};
