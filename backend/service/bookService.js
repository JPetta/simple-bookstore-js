// bookService.js

const { Book } = require('../entity');

const bookService = {
  // Create a new book
  createBook: async (data) => {
    try {
      const newBook = await Book.create(data);
      return newBook;
    } catch (error) {
      throw new Error('Error creating book');
    }
  },

  // Retrieve all books
  getAllBooks: async (page = 1, pageSize = 5) => {
    try {
      const offset = (page - 1) * pageSize;
      const books = await Book.findAndCountAll({
        limit: pageSize,
        offset: offset,
      });
      return books;
    } catch (error) {
      throw new Error('Error retrieving paginated books');
    }
  },

  // Retrieve a single book by ID
  getBookById: async (id) => {
    try {
      const book = await Book.findByPk(id);
      if (!book) {
        throw new Error('Book not found');
      }
      return book;
    } catch (error) {
      throw new Error('Error retrieving book');
    }
  },

  // Update a book by ID
  updateBook: async (id, data) => {
    try {
      const book = await Book.findByPk(id);
      if (!book) {
        throw new Error('Book not found');
      }
      const updatedBook = await book.update(data);
      return updatedBook;
    } catch (error) {
      throw new Error('Error updating book');
    }
  },

  // Delete a book by ID
  deleteBook: async (id) => {
    try {
      const book = await Book.findByPk(id);
      if (!book) {
        throw new Error('Book not found');
      }
      await book.destroy();
      return 'Book deleted successfully';
    } catch (error) {
      throw new Error('Error deleting book');
    }
  },
};

module.exports = bookService;
