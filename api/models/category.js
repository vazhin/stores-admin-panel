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
        validate: {
          notNull: { msg: 'A category must have a name' },
          notEmpty: { msg: 'The name must not be empty' },
        },
      },
      image: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: 'A category must have an image' },
          notEmpty: { msg: 'The image must not be empty' },
        },
      },
      numOfProducts: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
        validate: {
          isInt: { msg: 'The numOfProducts must be an integer' },
        },
      },
      storeId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notNull: { msg: 'A category must have a storeId' },
          notEmpty: { msg: 'The storeId must not be empty' },
          isInt: { msg: 'The storeId must be an integer' },
        },
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
