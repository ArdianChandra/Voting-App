'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('CandidateVoters', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      CandidateId: {
        type: Sequelize.INTEGER,
        references: {
          model: "Candidates",
          key: "id"
        },
        onUpdate: "cascade",
        onDelete: "cascade"
      },
      VoterId: {
        type: Sequelize.INTEGER,
        references: {
          model: "Voters",
          key: "id"
        },
        onUpdate: "cascade",
        onDelete: "cascade"
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('CandidateVoters');
  }
};