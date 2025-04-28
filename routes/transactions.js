const express = require('express');
const router = express.Router();
const { getTransactions, createTransaction } = require('../controllers/transactions');

router.route('/')
  .get(getTransactions)
  .post(createTransaction);

module.exports = router;