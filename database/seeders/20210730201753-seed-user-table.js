'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'Users',
      [
        {
          firstName: 'Will',
          lastName: 'Hicks',
          email: 'will@gmail.com',
          password:
            '$2b$10$cUQlPVGwL0PSssIeRW0L3e52OfuBH.CVvbZ8CSnE65AOlTNaCuJCK',
          createdAt: '2021-01-05T21:20:13.444+00:00',
          updatedAt: '2021-01-05T21:20:13.444+00:00',
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Users', null, {});
  },
};
