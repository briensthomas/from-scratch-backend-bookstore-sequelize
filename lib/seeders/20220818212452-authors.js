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
    await queryInterface.bulkInsert('Authors', [
      {
        firstName: 'Bryce',
        lastName: 'O\'Connor',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: 'Will',
        lastName: 'Wight',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: 'Anthony',
        lastName: 'Ryan',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: 'Phil',
        lastName: 'Tucker',
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
