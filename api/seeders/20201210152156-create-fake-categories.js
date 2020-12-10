'use strict';

function createRecords() {
  const records = [];
  for (let i = 0; i < 4; i++) {
    records.push({
      uuid: i + 10 + '7b680a-3655-40e0-a3c9-a6722b5a1c1d',
      name: 'Category Name',
      image: 'uploads/categories/1605641021210-156853.jpg',
      storeId: 8,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
  }
  return records;
}

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('categories', createRecords());
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('categories', null);
  },
};
