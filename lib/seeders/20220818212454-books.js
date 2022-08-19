'use strict';

module.exports = {
  async up (queryInterface) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Books', [
      {
        title: 'Iron Prince',
        genre: 'Fantasy',
        releasedYear: 2020,
        authorId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Dreadgod',
        genre: 'Fantasy',
        releasedYear: 2022,
        authorId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'The Pariah',
        genre: 'Fantasy',
        releasedYear: 2021,
        authorId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Bastion',
        genre: 'Fantasy',
        releasedYear: 2021,
        authorId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ]);
  },

  async down () {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
