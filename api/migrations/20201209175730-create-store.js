'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface
      .createTable('stores', {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        uuid: {
          type: Sequelize.UUID,
          defaultValue: Sequelize.UUIDV4,
        },
        name: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        logo: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        numOfCategories: {
          type: Sequelize.INTEGER,
          allowNull: false,
          defaultValue: 0,
        },
        createdAt: {
          allowNull: false,
          type: Sequelize.DATE,
        },
        updatedAt: {
          allowNull: false,
          type: Sequelize.DATE,
        },
      })
      .then(() => queryInterface.addIndex('stores', ['uuid']));
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('stores');
  },
};
