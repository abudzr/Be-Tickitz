const express = require('express')
const router = express.Router()
const usersController = require('../controllers/users_controllers')

router
  .get('/', usersController.getUsers)
  .get('/:id', usersController.getUsersById)
  .post('/', usersController.insertUsers)
  .put('/:id', usersController.updateUsers)
  .delete('/:id', usersController.deleteUsers)

module.exports = router
