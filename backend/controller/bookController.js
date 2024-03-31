// bookController.js

// Import the bookService
const bookService = require('../service/bookService');

// Define the controller methods
const bookController = {
  // Create a new book
  createBook: async (req, res) => {
    try {
      const newBook = await bookService.createBook(req.body);
      res.json(newBook);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  // Retrieve all books
  getAllBooks: async (req, res) => {
    try {
      const allBooks = await bookService.getAllBooks();
      res.json(allBooks);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  // Retrieve a single book by ID
  getBookById: async (req, res) => {
    try {
      const { id } = req.params;
      const book = await bookService.getBookById(id);
      res.json(book);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  // Update a book by ID
  updateBook: async (req, res) => {
    try {
      const { id } = req.params;
      const updatedBook = await bookService.updateBook(id, req.body);
      res.json(updatedBook);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  // Delete a book by ID
  deleteBook: async (req, res) => {
    try {
      const { id } = req.params;
      const message = await bookService.deleteBook(id);
      res.json({ message });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
};

module.exports = bookController;
