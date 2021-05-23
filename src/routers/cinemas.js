const express = require('express')
const router = express.Router()
const cinemasController = require('../controllers/cinemas')
const auth = require('../middlewares/auth')
const admin = require('../middlewares/admin')
const multer = require('../middlewares/multer')

router
  .get('/', auth.verifyAccess, cinemasController.getcinemas)
  .get('/:id', auth.verifyAccess, cinemasController.getcinemasById)
  .get('/filter/by', auth.verifyAccess, cinemasController.getcinemasFilter)
  .get('/sb/sort/by', auth.verifyAccess, cinemasController.getcinemasSort)
  .post('/loc/by', auth.verifyAccess, cinemasController.getCinemaByLocation)

  .post('/', auth.verifyAccess, admin.onlyAdmin, multer.uploadImage.single("image"), cinemasController.insertcinemas)
  .put('/:id', auth.verifyAccess, admin.onlyAdmin, multer.uploadImage.single("image"), cinemasController.updatecinemas)
  .delete('/:id', auth.verifyAccess, admin.onlyAdmin, cinemasController.deletecinemas)
// .get('/:name', cinemasController.getSearch)

module.exports = router
