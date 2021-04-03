const express = require('express')
const router = express.Router()
const movieController = require('../controllers/movies')
const auth = require('../middlewares/auth')
const { uploadMulter } = require('../middlewares/multer')
const { cacheAllMovies, clearAllMovies } = require('../middlewares/redis')
const admin = require('../middlewares/admin')

router
  .get('/', auth.verifyAccess, movieController.listMovies)
  .get('/allMovies', auth.verifyAccess, cacheAllMovies, movieController.getMoviesAll)
  .get('/nowShowing', auth.verifyAccess, movieController.getMovieNowShowing)
  .get('/upComing', auth.verifyAccess, movieController.getMovieUpComing)
  .get('/:id', auth.verifyAccess, movieController.getMoviesById)
  .get('/detailGenre/:id', auth.verifyAccess, movieController.getMoviesGenreById)

  .post('/', auth.verifyAccess, admin.onlyAdmin, uploadMulter.single('image'), clearAllMovies, movieController.insertMovies)
  .patch('/:id', auth.verifyAccess, admin.onlyAdmin, uploadMulter.single('image'), movieController.updateMovie)
  .delete('/:id', auth.verifyAccess, admin.onlyAdmin, movieController.deleteMovies)

module.exports = router
