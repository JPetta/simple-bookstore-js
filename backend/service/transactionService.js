// services/transactionService.js
const { Transaction, User, Book } = require('../entity');

exports.createTransaction = async (user_id, book_id) => {
  try {
    // Get the user and book details
    const user = await User.findByPk(user_id);
    const book = await Book.findByPk(book_id);

    if (!user) {
      throw new Error('User not found.');
    }

    if (!book) {
      throw new Error('Book not found.');
    }

    // Check if user's points are enough to buy the book
    if (user.points < book.point) {
      throw new Error('User does not have enough points to buy the book.');
    }

    // Deduct points from user
    user.point -= book.point;
    console.log(user.point)
    await user.save();

    // Create the transaction
    const transaction = await Transaction.create({ user_id, book_id});

    return transaction;
  } catch (error) {
    throw new Error('Failed to create transaction: ' + error.message);
  }
};


exports.getAllTransactionsForUser = async (userId) => {
  try {
    const transactions = await Transaction.findAll({ where: { user_id: userId }, include : [User, Book] });
    return transactions;
  } catch (error) {
    throw new Error('Failed to retrieve transactions for the user.');
  }
};


exports.deleteTransaction = async (transactionId, userId) => {
    try {
      // Get the transaction details
      const transaction = await Transaction.findByPk(transactionId, { include: [Book, User] });
  
      if (!transaction) {
        throw new Error('Transaction not found.');
      }
  
      // Get the user details
      const user = await User.findByPk(userId);
  
      if (!user) {
        throw new Error('User not found.');
      }
  
      // Return the points to the user
      user.point += transaction.Book.point;
      await user.save();
  
      // Delete the transaction
      await transaction.destroy();
  
      return { message: 'Transaction deleted successfully. Points returned to user.' };
    } catch (error) {
      throw new Error('Failed to delete transaction: ' + error.message);
    }
  };
