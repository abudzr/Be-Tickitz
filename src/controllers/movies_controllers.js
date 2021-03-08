const moviesModels = require('../models/movies_models')
const helpers = require('../helpers/helper')

exports.getMovies = (req, res) => {
  const page = parseInt(req.query.page)
  const limit = parseInt(req.query.limit)
  const start = (page - 1) * limit

  moviesModels.getMovies(start, limit)
    .then((result) => {
      listMovies = result.length
      res.json({
        page,
        listMovies,
        data: result
      })
    })
    .catch((err) => {
      const error = new createError.InternalServerError()
      next(error)
    })
}
exports.updateMovies = (req, res) => {
  const id = req.params.id
  const {
    idMovie,
    movieName,
    directedBy,
    duration,
    casts,
    synopsis,
    genre
  } = req.body

  const data = {
    idMovie,
    movieName,
    releaseDate: new Date(),
    directedBy,
    duration,
    casts,
    synopsis,
    genre
  }
  moviesModels.updateMovies(id, data)
    .then((result) => {
      res.json({
        data: result
      })
    })
    .catch((err) => {
      console.log(err)
    })
}

exports.insertMovies = (req, res) => {
  const {
    idMovie,
    movieName,
    directedBy,
    duration,
    casts,
    synopsis,
    genre
  } = req.body

  const data = {
    idMovie,
    movieName,
    releaseDate: new Date(),
    directedBy,
    duration,
    casts,
    synopsis,
    genre
  }
  moviesModels.insertMovies(data)
    .then((result) => {
      res.json({
        data: result
      })
    })
    .catch((err) => {
      console.log(err)
    })
}

exports.deleteMovies = (req, res) => {
  const idMovies = req.params.idMovie
  moviesModels.deleteMovies(idMovies)
    .then((result) => {
      res.json({
        data: result
      })
    })
    .catch((err) => {
      console.log(err)
    })
}

exports.getMoviesById = (req, res) => {
  const idMovie = req.params.idMovie
  moviesModels.getMoviesById(idMovie)
    .then((result) => {
      res.json({
        data: result
      })
    })
}

// get moviesName
exports.getMoviesBySearch = (req, res) => {
  const idMovie = req.params.search
  moviesModels.getMoviesBySearch(idMovie)
    .then((result) => {
      res.json({
        data: result
      })
    })
}