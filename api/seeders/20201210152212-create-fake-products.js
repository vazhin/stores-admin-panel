'use strict';

function createRecords() {
  const records = [];
  for (let i = 0; i < 4; i++) {
    records.push({
      uuid: i + 20 + '7b680a-3655-40e0-a3c9-a6722b5a1c1d',
      name: 'Product Name',
      image: 'uploads/products/1605641021210-156853.jpg',
      price: 35000,
      quantity: i,
      categoryId: 8,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
  }
  return records;
}

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('products', createRecords());
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('products', null);
  },
};
