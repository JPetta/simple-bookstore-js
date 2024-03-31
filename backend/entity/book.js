'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Book extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Book.hasMany(models.Transaction, {foreignKey : "book_id"});
    }
  }
  Book.init({
    title: DataTypes.STRING,
    writer: DataTypes.STRING,
    cover_image: DataTypes.STRING,
    point: DataTypes.FLOAT,
    tag: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Book',
  });
  return Book;
};