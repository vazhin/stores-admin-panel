'use strict';

function createRecords() {
  const records = [];
  for (let i = 0; i < 8; i++) {
    records.push({
      uuid: i + '67b680a-3655-40e0-a3c9-a6722b5a1c1d',
      name: 'Store Name',
      logo: 'uploads/stores/1605641021210-156853.jpg',
      createdAt: new Date(),
      updatedAt: new Date(),
    });
  }
  return records;
}

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('stores', createRecords());
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('stores', null);
  },
};
