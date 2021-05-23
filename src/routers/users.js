const express = require('express')
const router = express.Router()
const usersController = require('../controllers/users')
const auth = require('../middlewares/auth')
const multer = require('../middlewares/multer')
const admin = require('../middlewares/admin')

router
  .get('/', usersController.getUsers)
  .get('/email', usersController.getUsersbyEmail)
  .get('/:id', usersController.getUsersById)
  .patch('/:id', multer.uploadImage.single("image"), usersController.updateUsers)
  .delete('/:id', usersController.deleteUsers)

  .post('/login', usersController.login)
  .post('/register', multer.uploadImage.single("image"), usersController.register)
  .get('/auth/activate', usersController.activationAccount)

  .post('/forgot-password', usersController.forgotpass)
  .put('/password-reset', usersController.resetpass)

module.exports = router
