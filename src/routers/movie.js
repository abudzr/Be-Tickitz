const express = require('express')
const router = express.Router()
const movieController = require('../controllers/movies_controllers')
const auth = require('../middlewares/auth')
const { uploadMulter } = require('../middlewares/multer')
const { cacheAllMovies, clearAllMovies } = require('../middlewares/redis')
const admin = require('../middlewares/admin')


// const upload = multer({ dest: 'uploads/' })

router
  .get('/', auth.verifyAccess, movieController.getMovies)
  .get('/all', auth.verifyAccess, cacheAllMovies, movieController.getMoviesAll)
  .get('/:idMovie', auth.verifyAccess, movieController.getMoviesById)
  .get('/search/film', auth.verifyAccess, movieController.getMoviesBySearch)
  // .get('/', movieController.getMoviesBySearch)
  .post('/', auth.verifyAccess, admin.onlyAdmin, uploadMulter.single('image'), clearAllMovies, movieController.insertMovies)
  .put('/:id', auth.verifyAccess, admin.onlyAdmin, uploadMulter.single('image'), movieController.updateMovies)
  .delete('/:idMovie', auth.verifyAccess, admin.onlyAdmin, movieController.deleteMovies)

module.exports = router