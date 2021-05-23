const express = require('express')
const router = express.Router()
const movieController = require('../controllers/movies')
const auth = require('../middlewares/auth')
const multer = require('../middlewares/multer')
const { cacheAllMovies, clearAllMovies } = require('../middlewares/redis')
const admin = require('../middlewares/admin')

router
  .get('/', movieController.listMovies)
  .get('/allMovies', auth.verifyAccess, cacheAllMovies, movieController.getMoviesAll)
  .get('/nowShowing', movieController.getMovieNowShowing)
  .get('/upComing', movieController.getMovieUpComing)
  .get('/:id', movieController.getMoviesById)
  .get('/detailGenre/:id', auth.verifyAccess, movieController.getMoviesGenreById)

  .post('/', auth.verifyAccess, admin.onlyAdmin, multer.uploadImage.single("image"), clearAllMovies, movieController.insertMovies)
  .patch('/:id', auth.verifyAccess, admin.onlyAdmin, multer.uploadImage.single("image"), movieController.updateMovie)
  .delete('/:id', auth.verifyAccess, admin.onlyAdmin, movieController.deleteMovies)

module.exports = router
