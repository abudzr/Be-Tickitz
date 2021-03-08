const transactionModels = require('../models/transactions_models')

exports.getTransactions = (req, res) => {
  transactionModels.getTransactions()
    .then((result) => {
      dataTransaction = result.length
      res.json({
        dataTransaction,
        data: result
      })
    })
    .catch((err) => {
      console.log(err)
    })
}

exports.updateTransactions = (req, res) => {
  const id = req.params.id
  const {
    idTransaction,
    idTickets,
    idUsers,
    paymentMethod,
    seats,
    count

  } = req.body

  const data = {
    idTransaction,
    idTickets,
    idUsers,
    paymentMethod,
    dateTime: new Date(),
    seats,
    count
  }
  transactionModels.updateTransactions(id, data)
    .then((result) => {
      res.json({
        data: result
      })
    })
    .catch((err) => {
      console.log(err)
    })
}

exports.insertTransactions = (req, res) => {
  const {
    idTransaction,
    idTickets,
    idUsers,
    paymentMethod,
    seats,
    count
  } = req.body

  const data = {
    idTransaction,
    idTickets,
    idUsers,
    paymentMethod,
    dateTime: new Date(),
    seats,
    count
  }
  transactionModels.insertTransactions(data)
    .then((result) => {
      res.json({
        data: result
      })
    })
    .catch((err) => {
      console.log(err)
    })
}

exports.deleteTransactions = (req, res) => {
  const idTransactions = req.params.id
  transactionModels.deleteTransactions(idTransactions)
    .then((result) => {
      res.json({
        data: result
      })
    })
    .catch((err) => {
      console.log(err)
    })
}

exports.getTransactionsById = (req, res) => {
  const idTransactions = req.params.id
  transactionModels.getTransactionsById(idTransactions)
    .then((result) => {
      res.json({
        data: result
      })
    })
}
