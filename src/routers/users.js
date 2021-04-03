const express = require('express')
const router = express.Router()
const usersController = require('../controllers/users')
const auth = require('../middlewares/auth')
const { uploadMulter } = require('../middlewares/multer')
const admin = require('../middlewares/admin')

router
  .get('/', usersController.getUsers)
  .get('/:id', usersController.getUsersById)
  .put('/:id', uploadMulter.single('image'), usersController.updateUsers)
  .delete('/:id', usersController.deleteUsers)

  .post('/login', usersController.login)
  .post('/register', uploadMulter.single('image'), usersController.register)
  .get('/auth/activate', usersController.activationAccount)

  .post('/forgot-password', usersController.forgotpass)
  .post('/password-reset', usersController.resetpass)

module.exports = router
