const express = require('express')
const router = express.Router()
const ticketsController = require('../controllers/tickets_controllers')
const auth = require('../middlewares/auth')

router
  .get('/', auth.verifyAccess, ticketsController.getTickets)
  .get('/:id', auth.verifyAccess, ticketsController.getTicketsById)
  .post('/', ticketsController.insertTickets)
  .put('/:id', ticketsController.updateTickets)
  .delete('/:id', ticketsController.deleteTickets)
// .get('/:name', ticketsController.getSearch)

module.exports = router
