'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Store extends Model {
    static associate({ Category }) {
      this.hasMany(Category, { foreignKey: 'storeId', as: 'categories' });
    }
  }
  Store.init(
    {
      uuid: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: 'A store must have a name' },
          notEmpty: { msg: 'The name must not be empty' },
        },
      },
      logo: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: 'A store must have a logo' },
          notEmpty: { msg: 'The logo must not be empty' },
        },
      },
      numOfCategories: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
        validate: {
          isInt: { msg: 'The numOfCategories must be an integer' },
        },
      },
    },
    {
      sequelize,
      modelName: 'Store',
      tableName: 'stores',
    }
  );
  return Store;
};
