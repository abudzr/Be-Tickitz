const usersModels = require('../models/users_models')
const helper = require('../helpers/helper')
const common = require('../helpers/common')
const { v4: uuidv4 } = require('uuid');
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')


exports.getUsers = (req, res) => {
  usersModels.getUsers()
    .then((result) => {
      helper(res, 200, true, "success", result);
    })
    .catch((err) => {
      console.log(err)
    })
}

exports.updateUsers = (req, res) => {
  const id = req.params.id
  const { email, password, firstName, lastName, phone } = req.body

  const data = {
    email,
    password,
    firstName,
    lastName,
    phone

  }
  usersModels.updateUsers(data, id)
    .then((result) => {
      res.json({
        data: result
      })
    })
    .catch((err) => {
      console.log(err)
    })
}

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body
    const result = await usersModels.findUsers(email)
    // console.log(result);
    if (result.length === 0) {
      return helper(res, 401, false, 'email dan password anda salah')
    }
    const users = result[0]
    // console.log(users);
    const isValid = await bcrypt.compare(password, users.password)
    // console.log(isValid);
    if (!isValid) {
      return helper(res, 401, false, 'email dan password anda salah')
    }
    delete users.password;

    // lulus pengecekan
    // generet token
    const payload = { email: users.email, firstName: users.firstName, lastName: users.lastName }
    jwt.sign(payload, process.env.SECRET_KEY, { expiresIn: '2h' }, function (err, token) {
      users.token = token
      return helper(res, 200, true, '', users)
    });

  } catch (error) {
    console.log(error);
    return helper(res, 500, false, 'Internal Server Error')
  }
}

exports.register = async (req, res) => {
  try {
    const { email, password, firstName, lastName, phone } = req.body
    const result = await usersModels.findUsers(email)
    // console.log(result);
    if (result.length !== 0) {
      return helper(res, 200, true, 'email sudah ada', null)
    }
    const data = {
      idUsers: uuidv4(),
      email,
      password: await common.hashPassword(password),
      firstName,
      lastName,
      phone
    }
    const resultInsert = await usersModels.insertUsers(data)
    return helper(res, 401, true, 'insert data berhasil', resultInsert)
  } catch (error) {
    console.log(error);
    return helper(res, 500, false, 'Internal Server Error', null)
  }
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
