const transactionModels = require('../models/transactions_models')
const { v4: uuidv4 } = require('uuid')
const helper = require('../helpers/helper')

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
    idTickets,
    idUsers,
    paymentMethod,
    seats,
    count

  } = req.body

  const data = {
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
    idTickets,
    idUsers,
    paymentMethod,
    seats,
    count
  } = req.body

  const data = {
    idTransaction: uuidv4(),
    idTickets,
    idUsers,
    paymentMethod,
    dateTime: new Date(),
    seats,
    count
  }
  transactionModels.insertTransactions(data)
    .then((result) => {
      helper(res, 200, true, 'insert data berhasil', result)
    })
    .catch((err) => {
      console.log(err)
    })
}

exports.deleteTransactions = (req, res) => {
  const idTransactions = req.params.id
  transactionModels.deleteTransactions(idTransactions)
    .then((result) => {
      helper(res, 200, true, 'delete success', result)
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
