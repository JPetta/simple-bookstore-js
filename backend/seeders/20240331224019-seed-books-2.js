// In the seed-books.js file

// Import the JSON data
const booksData = require('../seed-data/books_2.json');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const booksWithTimestamps = booksData.map(book => ({
      ...book,
      createdAt: new Date(),
      updatedAt: new Date()
    }));

    await queryInterface.bulkInsert('Books', booksWithTimestamps, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Books', null, {});
  }
};
