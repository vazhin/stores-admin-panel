'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Store extends Model {
    static associate(models) {
      // define association here
    }
  }
  Store.init(
    {
      name: DataTypes.STRING,
      logo: DataTypes.STRING,
      numOfCategories: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Store',
    }
  );
  return Store;
};
