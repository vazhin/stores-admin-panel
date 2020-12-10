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
      },
      logo: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      numOfCategories: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
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
