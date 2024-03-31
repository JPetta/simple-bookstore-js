// userService.js
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { User } = require('../entity'); // Assuming you have a User model defined with Sequelize

exports.registerUser = async (username, password, role) => {
  try {
    // Check if username already exists
    const existingUser = await User.findOne({ where: { username } });
    if (existingUser) {
      throw new Error('Username already exists.');
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create the user
    const user = await User.create({ username, role, password: hashedPassword });

    return user;
  } catch (error) {
    throw error;
  }
};

exports.loginUser = async (username, password) => {
  try {
    // Check if the user exists
    const user = await User.findOne({ where: { username } });
    if (!user) {
      throw new Error('User not found.');
    }

    console.log(user)
    // Check if the password is correct
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      throw new Error('Invalid password.');
    }

    // Create JWT token
    const token = jwt.sign({id : user.id, username: user.username, role: user.role }, process.env.SECRET, { expiresIn: '1h' });

    return token;
  } catch (error) {
    throw error;
  }
};
