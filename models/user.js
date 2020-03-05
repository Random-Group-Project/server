'use strict';
const { hash } = require('../helpers/bcrypt')
module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model

  class User extends Model {
    static associate (models) {
      User.hasMany(models.Activity)
    }
  }
  User.init({
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Username cannot be empty'
        },
        notEmpty: {
          msg: 'Username cannot be empty'
        }
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: {
        msg: 'Email already used'
      },
      validate: {
        notNull: {
          msg: 'Email cannot be empty'
        },
        isEmail: {
          msg: 'Wrong email format'
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Password cannot be empty'
        },
        notEmpty: {
          msg: 'Password cannot be empty'
        },
        len: {
          args: [3],
          msg: 'Minimum password length is three characters'
        }
      }
    }
  }, {
    sequelize,
    hooks: {
      beforeCreate(user, opt) {
        user.password = hash(user.password)
      }
    }});

  return User;
};