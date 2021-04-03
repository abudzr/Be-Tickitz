const express = require('express')
const router = express.Router()
const transactionsController = require('../controllers/transactions')
const auth = require('../middlewares/auth')

router
  .post('/', auth.verifyAccess, transactionsController.createTransaction)
  .get('/:id', auth.verifyAccess, transactionsController.detailTransaction)
  .get('/orderHistory/:idUsers', auth.verifyAccess, transactionsController.orderHistory)

module.exports = router
