'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
        User.hasMany(models.Transaction, {foreignKey : "book_id"})
    }
  }
  User.init({
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    point : DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};