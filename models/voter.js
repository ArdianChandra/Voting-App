'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Voter extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */

     getTitle(){
       if(this.gender === "male"){
         return `Mr ${this.name}`
       }
       else{
         return `Mrs/Ms ${this.name}`
       }
     }

    static associate(models) {
      // define association here
      Voter.belongsToMany(models.Candidate, {through: models.CandidateVoter})
    }
  };
  Voter.init({
    name: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: "Name cannot be empty"
        }
      }
    },
    username: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: "Username cannot be empty"
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: "Password cannot be empty"
        }
      }
    },
    email: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: "Email cannot be empty"
        }
      }
    },
    gender: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: "Gender cannot be empty"
        }
      }
    },
    age: {
      type: DataTypes.INTEGER,
      validate: {
        notEmpty: {
          msg: "Age cannot be empty"
        },
        min: {
          args: 17,
          msg: "Age Must be More than 17 years old"
        }
      }
    }
  }, {
    sequelize,
    modelName: 'Voter',
  });
  return Voter;
};