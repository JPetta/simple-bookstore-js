// controllers/transactionController.js
const transactionService = require('../service/transactionService');

exports.createTransaction = async (req, res) => {
  try {
    const { user_id, book_id } = req.body;
    const transaction = await transactionService.createTransaction(user_id, book_id);
    res.status(201).json({ message: 'Transaction created successfully.', transaction });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error.' });
  }
};

exports.getAll = async (req, res) => {
  try {
    const transaction = await transactionService.getAllTransactionsForUser(req.user.id);
    res.status(201).json({ message: 'Transactions retreived.', transaction });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};

exports.deleteTransaction = async (req, res) => {
  try {
    const { id } = req.params;
    await transactionService.deleteTransaction(id);
    res.status(200).json({ message: 'Transaction deleted successfully.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error.' });
  }
};
