const express = require('express')
const router = express.Router()
const genreController = require('../controllers/genre')
const auth = require('../middlewares/auth')
const admin = require('../middlewares/admin')

router


    .get('/', genreController.listGenre)
    .get('/listAllGenre', genreController.listAllGenre)
    .get('/:id', genreController.detailGenre)
    .post('/', auth.verifyAccess, admin.onlyAdmin, genreController.createGenre)
    .delete('/:id', auth.verifyAccess, admin.onlyAdmin, genreController.deleteGenre)
    .patch('/:id', auth.verifyAccess, admin.onlyAdmin, genreController.updateGenre)

module.exports = router