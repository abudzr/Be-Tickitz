const express = require('express')
const router = express.Router()
const cinemasController = require('../controllers/cinemas_controllers')
const auth = require('../middlewares/auth')
const admin = require('../middlewares/admin')

router
  .get('/', auth.verifyAccess, cinemasController.getcinemas)
  .get('/:id', auth.verifyAccess, cinemasController.getcinemasById)
  .post('/', auth.verifyAccess, admin.onlyAdmin, cinemasController.insertcinemas)
  .put('/:id', auth.verifyAccess, admin.onlyAdmin, cinemasController.updatecinemas)
  .delete('/:id', auth.verifyAccess, admin.onlyAdmin, cinemasController.deletecinemas)
  .get('/filter/by', auth.verifyAccess, cinemasController.getcinemasFilter)
  .get('/sb/sort/by', auth.verifyAccess, cinemasController.getcinemasSort)

// .get('/:name', cinemasController.getSearch)

module.exports = router
