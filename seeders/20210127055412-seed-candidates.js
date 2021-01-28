'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    return queryInterface.bulkInsert('Candidates', [
      {
        name: "Aaron Schock",
        birth_date: "1977-05-22",
        party: "R",
        location: "IL",
        total_vote: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Adam Kinzinger",
        birth_date: "1965-12-06",
        party: "R",
        location: "IL",
        total_vote: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "John Kerry",
        birth_date: "1980-07-23",
        party: "D",
        location: "LA",
        total_vote: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Joseph Lieberman",
        birth_date: "1975-04-09",
        party: "I",
        location: "NY",
        total_vote: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ])
  },

  down: (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulDelete('Candidates', null, {})
  }
};
