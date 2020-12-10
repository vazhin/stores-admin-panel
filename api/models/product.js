'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    static associate({ Category }) {
      this.belongsTo(Category, { foreignKey: 'categoryId', as: 'category' });
    }
  }
  Product.init(
    {
      uuid: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: 'A product must have a name' },
          notEmpty: { msg: 'The name must not be empty' },
        },
      },
      image: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: 'A product must have an image' },
          notEmpty: { msg: 'The image must not be empty' },
        },
      },
      price: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notNull: { msg: 'A product must have a price' },
          notEmpty: { msg: 'The price must not be empty' },
          isInt: { msg: 'The price must be an integer' },
        },
      },
      quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notNull: { msg: 'A product must have quantity' },
          notEmpty: { msg: 'The quantity must not be empty' },
          isInt: { msg: 'The quantity must be an integer' },
        },
      },
      categoryId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notNull: { msg: 'A product must have a categoryId' },
          notEmpty: { msg: 'The categoryId must not be empty' },
          isInt: { msg: 'The categoryId must be an integer' },
        },
      },
    },
    {
      sequelize,
      modelName: 'Product',
      tableName: 'products',
    }
  );
  return Product;
};
