const express = require('express')
const router = express.Router()
const ticketsController = require('../controllers/tickets_controllers')
const auth = require('../middlewares/auth')
const admin = require('../middlewares/admin')

router
  .get('/', auth.verifyAccess, ticketsController.getTickets)
  .get('/:id', auth.verifyAccess, ticketsController.getTicketsById)
  .post('/', auth.verifyAccess, admin.onlyAdmin, ticketsController.insertTickets)
  .put('/:id', auth.verifyAccess, admin.onlyAdmin, ticketsController.updateTickets)
  .delete('/:id', auth.verifyAccess, admin.onlyAdmin, ticketsController.deleteTickets)
// .get('/:name', ticketsController.getSearch)

module.exports = router
