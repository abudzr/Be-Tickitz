const express = require('express')
const router = express.Router()
const usersController = require('../controllers/users_controllers')

router
  .get('/', usersController.getUsers)
  .get('/:id', usersController.getUsersById)
  .put('/:id', usersController.updateUsers)
  .delete('/:id', usersController.deleteUsers)

  .post('/login', usersController.login)
  .post('/register', usersController.register)
  .post('/auth/activate/:token', usersController.activationAccount)

  .post('/forgot-password', usersController.forgotpass)
  .post('/password-reset', usersController.resetpass)

module.exports = router
