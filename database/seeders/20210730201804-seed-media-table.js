'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'Media',
      [
        {
          name: 'Alps ',
          description: 'Swiss Alps',
          url: 'https://tinyurl.com/39f8raue',
          createdAt: '2021-01-05T21:20:13.444+00:00',
          updatedAt: '2021-01-05T21:20:13.444+00:00',
        },
        {
          name: 'Norway',
          description: 'Norway, Scandinavia',
          url: 'https://tinyurl.com/pkbmnsu8',
          createdAt: '2021-01-05T21:20:13.444+00:00',
          updatedAt: '2021-01-05T21:20:13.444+00:00',
        },
        {
          name: 'Cave',
          description: 'Davon Janse',
          url: 'https://tinyurl.com/dnd3f6df',
          createdAt: '2021-01-05T21:20:13.444+00:00',
          updatedAt: '2021-01-05T21:20:13.444+00:00',
        },
        {
          name: 'Nature',
          description: 'Nature is amazing',
          url: 'https://tinyurl.com/6m3akvb7',
          createdAt: '2021-01-05T21:20:13.444+00:00',
          updatedAt: '2021-01-05T21:20:13.444+00:00',
        },
        {
          name: 'Pakistan',
          description: 'Multan Railway station',
          url: 'https://tinyurl.com/3yr3855f',
          createdAt: '2021-01-05T21:20:13.444+00:00',
          updatedAt: '2021-01-05T21:20:13.444+00:00',
        },
        {
          name: 'River',
          description: 'some river',
          url: 'https://tinyurl.com/25mcz73b',
          createdAt: '2021-01-05T21:20:13.444+00:00',
          updatedAt: '2021-01-05T21:20:13.444+00:00',
        },
        {
          name: 'k2',
          description: 'K2 Trek',
          url: 'https://tinyurl.com/k4znx4zk',
          createdAt: '2021-01-05T21:20:13.444+00:00',
          updatedAt: '2021-01-05T21:20:13.444+00:00',
        },
        {
          name: 'Cat',
          description: 'A black cat',
          url: 'https://tinyurl.com/5frh5r28',
          createdAt: '2021-01-05T21:20:13.444+00:00',
          updatedAt: '2021-01-05T21:20:13.444+00:00',
        },
        {
          name: 'Bike',
          description: 'Powerful bike',
          url: 'https://cdn.pixabay.com/photo/2020/05/10/07/50/transport-5152689_960_720.jpg',
          createdAt: '2021-01-05T21:20:13.444+00:00',
          updatedAt: '2021-01-05T21:20:13.444+00:00',
        },
        {
          name: 'k2',
          description: 'second highest mountain',
          url: 'https://cdn.pixabay.com/photo/2020/05/10/07/50/transport-5152689_960_720.jpg',
          createdAt: '2021-01-05T21:20:13.444+00:00',
          updatedAt: '2021-01-05T21:20:13.444+00:00',
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Media', null, {});
  },
};
