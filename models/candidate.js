'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Candidate extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Candidate.belongsToMany(models.Voter, {through: models.CandidateVoter})
    }
  };
  Candidate.init({
    name: DataTypes.STRING,
    birth_date: DataTypes.DATE,
    party: DataTypes.STRING,
    location: DataTypes.STRING,
    total_vote: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Candidate',
  });
  return Candidate;
};