const express = require('express')
const router = express.Router()
const movieController = require('../controllers/movies_controllers')

router
  .get('/', movieController.getMovies)
  .get('/all', movieController.getMoviesAll)
  .get('/:idMovie', movieController.getMoviesById)
  .get('/search/:param', movieController.getMoviesBySearch)
  // .get('/', movieController.getMoviesBySearch)

  .post('/', movieController.insertMovies)
  .put('/:id', movieController.updateMovies)
  .delete('/:idMovie', movieController.deleteMovies)

module.exports = router