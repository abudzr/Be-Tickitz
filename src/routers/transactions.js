const express = require('express')
const router = express.Router()
const transactionsController = require('../controllers/transactions_controlles')
const auth = require('../middlewares/auth')
const admin = require('../middlewares/admin')

router
  .get('/', auth.verifyAccess, transactionsController.getTransactions)
  .get('/:id', auth.verifyAccess, transactionsController.getTransactionsById)
  .post('/', auth.verifyAccess, admin.onlyAdmin, transactionsController.insertTransactions)
  .put('/:id', auth.verifyAccess, admin.onlyAdmin, transactionsController.updateTransactions)
  .delete('/:id', auth.verifyAccess, admin.onlyAdmin, transactionsController.deleteTransactions)

module.exports = router
