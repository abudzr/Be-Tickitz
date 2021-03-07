const express = require('express')
const router = express.Router()
const ticketsController = require('../controllers/tickets_controllers')

router
  .get('/', ticketsController.getTickets)
  .get('/:id', ticketsController.getTicketsById)
  .post('/', ticketsController.insertTickets)
  .put('/:id', ticketsController.updateTickets)
  .delete('/:id', ticketsController.deleteTickets)
// .get('/:name', ticketsController.getSearch)

module.exports = router
