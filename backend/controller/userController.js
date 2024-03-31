// userController.js
const userService = require('../service/userService');

exports.registerUser = async (req, res) => {
  try {
    const { username, password, role } = req.body;
    const user = await userService.registerUser(username, password, role);
    res.status(201).json({ message: 'User registered successfully.', user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error.' });
  }
};

exports.loginUser = async (req, res) => {
  try {
    const { username, password } = req.body;
    const token = await userService.loginUser(username, password);
    res.status(200).json({ message: 'Login successful.', token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error.' });
  }
};
