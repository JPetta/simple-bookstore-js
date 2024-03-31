const bcrypt = require('bcrypt');

// Import the JSON data
const userData = require('../seed-data/users.json');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const userDataWtihTimestamp = userData.map( user => ({
      ...user,
      createdAt: new Date(),
      updatedAt: new Date(),
      password : bcrypt.hashSync(user.password, 10)
    }));

    await queryInterface.bulkInsert('Users', userDataWtihTimestamp, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
