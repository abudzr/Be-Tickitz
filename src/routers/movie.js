const express = require('express')
const router = express.Router()
const movieController = require('../controllers/movies_controllers')

router
  .get('/', movieController.getMovies)
  .get('/:idMovie', movieController.getMoviesById)
  .get('/search/:search', movieController.getMoviesBySearch)

  .post('/', movieController.insertMovies)
  .put('/:id', movieController.updateMovies)
  .delete('/:idMovie', movieController.deleteMovies)

module.exports = router