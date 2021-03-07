const express = require('express')
const router = express.Router()
const transactionsController = require('../controllers/transactions_controlles')

router
  .get('/', transactionsController.getTransactions)
  .get('/:id', transactionsController.getTransactionsById)
  .post('/', transactionsController.insertTransactions)
  .put('/:id', transactionsController.updateTransactions)
  .delete('/:id', transactionsController.deleteTransactions)

module.exports = router
