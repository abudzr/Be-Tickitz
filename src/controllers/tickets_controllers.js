const ticketsModels = require('../models/tickets_models')

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
    idTickets,
    idMovie,
    price
  } = req.body

  const data = {
    idTickets,
    idMovie,
    schedule: new Date(),
    price
  }
  ticketsModels.updateTickets(id, data)
    .then((result) => {
      res.json({
        data: result
      })
    })
    .catch((err) => {
      console.log(err)
    })
}

exports.insertTickets = (req, res) => {
  const {
    idTickets,
    idMovie,
    price
  } = req.body

  const data = {
    idTickets,
    idMovie,
    schedule: new Date(),
    price
  }
  ticketsModels.insertTickets(data)
    .then((result) => {
      res.json({
        data: result
      })
    })
    .catch((err) => {
      console.log(err)
    })
}

exports.deleteTickets = (req, res) => {
  const id = req.params.id
  ticketsModels.deleteTickets(id)
    .then((result) => {
      res.json({
        data: result
      })
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