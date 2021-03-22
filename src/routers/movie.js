const express = require('express')
const router = express.Router()
const movieController = require('../controllers/movies_controllers')
const auth = require('../middlewares/auth')
const { uploadMulter } = require('../middlewares/multer')
const { cacheAllMovies, clearAllMovies } = require('../middlewares/redis')

// const upload = multer({ dest: 'uploads/' })

router
  .get('/', auth.verifyAccess, movieController.getMovies)
  .get('/all', auth.verifyAccess, cacheAllMovies, movieController.getMoviesAll)
  .get('/:idMovie', auth.verifyAccess, movieController.getMoviesById)
  .get('/search/:param', auth.verifyAccess, movieController.getMoviesBySearch)
  // .get('/', movieController.getMoviesBySearch)
  .post('/', auth.verifyAccess, uploadMulter.single('image'), clearAllMovies, movieController.insertMovies)
  .put('/:id', auth.verifyAccess, movieController.updateMovies)
  .delete('/:idMovie', auth.verifyAccess, movieController.deleteMovies)

module.exports = router