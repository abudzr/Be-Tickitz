const ticketsModels = require('../models/tickets_models')
const { v4: uuidv4 } = require('uuid')
const helper = require('../helpers/helper')

exports.getTickets = (req, res) => {
  ticketsModels.getTickets()
    .then((result) => {
      dataTicket = result.length
      res.json({
        dataTicket,
        data: result
      })
    })
    .catch((err) => {
      console.log(err)
    })
}

exports.updateTickets = (req, res) => {
  const id = req.params.id
  const {
    idMovie,
    price
  } = req.body

  const data = {
    idMovie,
    schedule: new Date(),
    price
  }
  ticketsModels.updateTickets(id, data)
    .then((result) => {
      helper(res, 200, true, 'data has been updated', result)
    })
    .catch((err) => {
      console.log(err)
    })
}

exports.insertTickets = (req, res) => {
  const {
    idMovie,
    price
  } = req.body

  const data = {
    idTickets: uuidv4(),
    idMovie,
    schedule: new Date(),
    price
  }
  ticketsModels.insertTickets(data)
    .then((result) => {
      helper(res, 200, true, 'insert data berhasil', result)
    })
    .catch((err) => {
      console.log(err)
    })
}

exports.deleteTickets = (req, res) => {
  const id = req.params.id
  ticketsModels.deleteTickets(id)
    .then((result) => {
      helper(res, 200, true, 'delete success', result)
    })
    .catch((err) => {
      console.log(err)
    })
}

exports.getTicketsById = (req, res) => {
  const id = req.params.id
  ticketsModels.getTicketsById(id)
    .then((result) => {
      res.json({
        data: result
      })
    })
}
