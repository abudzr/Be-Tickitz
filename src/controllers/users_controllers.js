const usersModels = require('../models/users_models')
const helpers = require('../helpers/helper')
const createError = require('http-errors')

exports.getUsers = (req, res) => {
  usersModels.getUsers()
    .then((result) => {
      const resultProduct = result
      helpers.response(res, resultProduct, 200)
      // res.json({
      //   data: result
      // })
    })
    .catch((err) => {
      const error = new createError.InternalServerError()
      next(error)
      // console.log(err)
    })
}

exports.updateUsers = (req, res) => {
  const id = req.params.id
  const {
    idUsers,
    email,
    password,
    fullName,
    phone
  } = req.body

  const data = {
    idUsers,
    email,
    password,
    fullName,
    phone

  }
  usersModels.updateUsers(id, data)
    .then((result) => {
      res.json({
        data: result
      })
    })
    .catch((err) => {
      console.log(err)
    })
}

exports.insertUsers = (req, res) => {
  const {
    idUsers,
    email,
    password,
    fullName,
    phone
  } = req.body

  const data = {
    idUsers,
    email,
    password,
    fullName,
    phone
  }
  usersModels.insertUsers(data)
    .then((result) => {
      res.json({
        data: result
      })
    })
    .catch((err) => {
      console.log(err)
    })
}

exports.deleteUsers = (req, res) => {
  const idUsers = req.params.id
  usersModels.deleteUsers(idUsers)
    .then((result) => {
      res.json({
        data: result
      })
    })
    .catch((err) => {
      console.log(err)
    })
}

exports.getUsersById = (req, res) => {
  const idUsers = req.params.id
  usersModels.getUsersById(idUsers)
    .then((result) => {
      res.json({
        data: result
      })
    })
}