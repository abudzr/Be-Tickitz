const usersModels = require('../models/users')
const helper = require('../helpers/helper')
const helperEmail = require('../helpers/email')
const common = require('../helpers/common')
// const { v4: uuidv4 } = require('uuid')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

exports.getUsers = (req, res) => {
  usersModels.getUsers()
    .then((result) => {
      helper(res, 200, true, 'success', result)
    })
    .catch((err) => {
      console.log(err)
    })
}

exports.getUsersById = (req, res) => {
  const idUsers = req.params.id
  usersModels.getUsersById(idUsers)
    .then((result) => {
      helper(res, 200, true, 'success', result)
    })
}

exports.deleteUsers = (req, res) => {
  const idUsers = req.params.id
  usersModels.deleteUsers(idUsers)
    .then((result) => {
      helper(res, 200, true, 'delete success', result)
    })
    .catch((err) => {
      console.log(err)
    })
}

exports.updateUsers = async (req, res) => {
  const id = req.params.id
  const { email, password, firstName, lastName, phone } = req.body
  console.log(req);
  const initialResult = await usersModels.getUsersById(id)
  const data = {
    email,
    password: await common.hashPassword(password),
    firstName,
    lastName,
    phone,
    image: req.file === undefined ? initialResult[0].image : `http://localhost:8000/img/${req.file.filename}`
  }
  usersModels.updateUsers(data, id)
    .then((result) => {
      helper(res, 200, true, 'update data success', result)
    })
    .catch((err) => {
      console.log(err)
    })
}

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body
    const result = await usersModels.findUsers(email)
    console.log(result);
    if (result.length === 0) {
      return helper(res, 401, false, 'Email or Password is incorrect. Try again or click Forgot password to reset.')
    }
    const users = result[0]
    // console.log(users.isVerified);
    if (users.isVerified === 0) {
      return helper(res, 401, false, 'Please Activation Your Email.')
    } else {
      const isValid = await bcrypt.compare(password, users.password)
      // console.log(isValid);
      if (!isValid) {
        return helper(res, 401, false, 'Email or Password is incorrect. Try again or click Forgot password to reset.')
      }
      delete users.password

      // lulus pengecekan
      // generet token
      const payload = { idUsers: users.idUsers, email: users.email, role: users.role, firstName: users.firstName, lastName: users.lastName }
      jwt.sign(payload, process.env.SECRET_KEY, { expiresIn: '2h' }, function (err, token) {
        users.token = token
        return helper(res, 200, true, 'login success', users)
      })
    }

    // console.log(users);

  } catch (error) {
    // console.log(error);
    return helper(res, 500, false, 'Internal Server Error')
  }
}

exports.register = async (req, res) => {
  try {
    const { email, password, firstName, lastName, phone } = req.body
    const result = await usersModels.findUsers(email)
    // console.log(result);
    if (result.length !== 0) {
      return helper(res, 401, false, 'user with this email already exists', null)
    }

    const token = jwt.sign({ email, firstName, lastName }, process.env.SECRET_KEY, { expiresIn: '1d' })

    const resEmail = await helperEmail.activationEmail(email, token)
    // console.log(resEmail);

    const data = {
      email,
      password: await common.hashPassword(password),
      firstName,
      lastName,
      phone,
      image: `http://localhost:8000/img/${req.file.filename}`

    }
    const resultInsert = await usersModels.insertUsers(data)
    return helper(res, 200, true, 'email has been sent, kindly activate your account.', resEmail)
  } catch (error) {
    // console.log(error);
    return helper(res, 400, false, 'Error in signup', null)
  }
}

exports.activationAccount = (req, res) => {
  try {
    const { token } = req.query
    if (token) {
      jwt.verify(token, process.env.SECRET_KEY, async function (err, decoded) {
        if (err) {
          return helper(res, 401, false, 'Incorrect or expired link', null)
        }

        // console.log(token);
        const { email } = decoded
        const checkEmail = await usersModels.findUsers(email)
        const users = checkEmail[0]
        const id = users.idUsers
        const data = {
          isVerified: 1
        }
        const resultUpdate = await usersModels.updateUsers(data, id)
        return res.redirect(`${process.env.URL_REACT}/signin`)
        // return helper(res, 200, true, 'You have been succesfully activated. You can login now!', null)
      })
    } else {
      return helper(res, 400, false, 'Error in signup', null)
    }
  } catch (error) {
    return helper(res, 400, false, 'Error in signup', null)
  }
}

exports.forgotpass = async (req, res) => {
  try {
    const { email } = req.body
    const checkEmail = await usersModels.findUsers(email)
    // console.log(checkEmail);
    if (checkEmail.length == 0) {
      return helper(res, 401, false, 'user with this email does not exists', checkEmail)
    }
    const users = checkEmail[0]
    // console.log(users.idUsers);
    const token = jwt.sign({ idUsers: users.idUsers }, process.env.RESET_PASSWORD_KEY, { expiresIn: '1h' })
    // console.log(token);
    const resEmail = await helperEmail.resetpass(email, token)

    const data = {
      reset: token
    }
    const updatePass = await usersModels.updateUsers(data, users.idUsers)

    return helper(res, 200, true, 'Email Has Been Sent, Please Follow The Instructions', resEmail)
  } catch (error) {
    return helper(res, 401, false, 'Incorrect or expired link', null)
  }
}

exports.resetpass = async (req, res) => {
  try {
    const { reset } = req.query
    const { password } = req.body
    if (reset) {
      jwt.verify(reset, process.env.RESET_PASSWORD_KEY, async function (err, decoded) {
        if (err) {
          return helper(res, 401, false, 'Incorrect or expired link', null)
        }
        const { idUsers } = decoded

        const checkReset = await usersModels.findReset(reset)
        // console.log(checkReset[0]);
        if (checkReset.length == 0) {
          return helper(res, 200, true, 'user with this email does not exists', checkReset)
        }

        const data = {
          password: await common.hashPassword(password)
        }
        // console.log(data);
        const resultUpdate = await usersModels.updateUsers(data, idUsers)
        return helper(res, 200, true, 'your password has been changed', resultUpdate)
      })
    } else {
      return helper(res, 401, false, 'Reset Password Error', null)
    }
  } catch (error) {
    return helper(res, 401, false, 'Authentication Error', null)
  }
}
