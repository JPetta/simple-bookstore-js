const express = require('express');
const router = express.Router();
const userRoutes = require('./userRoutes');
const booksRoutes = require('./bookRoutes');
const transactionRoutes = require('./transactionRoutes');

const {authenticate, authorize} = require('../helpers/auth');

router.use('/user', userRoutes);
router.use(authenticate)
router.use('/book', booksRoutes);
router.use('/transaction', transactionRoutes);

module.exports = router;