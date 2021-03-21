const express = require('express')
const router = express.Router()
const transactionsController = require('../controllers/transactions_controlles')
const auth = require('../middlewares/auth')

router
  .get('/', auth.verifyAccess, transactionsController.getTransactions)
  .get('/:id', auth.verifyAccess, transactionsController.getTransactionsById)
  .post('/', transactionsController.insertTransactions)
  .put('/:id', transactionsController.updateTransactions)
  .delete('/:id', transactionsController.deleteTransactions)

module.exports = router
