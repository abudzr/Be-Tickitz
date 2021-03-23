const moviesModels = require('../models/movies_models')
const helper = require('../helpers/helper')
const { v4: uuidv4 } = require('uuid');
const redis = require('redis')
const client = redis.createClient(6379)

exports.getMovies = (req, res) => {
  const page = parseInt(req.query.page)
  const limit = parseInt(req.query.limit)
  const start = (page - 1) * limit

  moviesModels.getMovies(start, limit)
    .then((result) => {
      helper(res, 200, true, "success", result);
    })
    .catch((err) => {
      helper(res, 500, false, "Internal Server Error", err);
    })
}

exports.getMoviesAll = (req, res) => {
  moviesModels.getMoviesAll()
    .then((result) => {
      const resultMovies = result
      client.setex("getAllMovies", 60 * 60 * 12, JSON.stringify(resultMovies))
      helper(res, 200, true, "success", resultMovies);
    })
    .catch((err) => {
      console.log(err)
    })
}

exports.updateMovies = (req, res) => {
  const id = req.params.id
  const { movieName, directedBy, duration, casts, synopsis, genre } = req.body

  const data = {
    movieName,
    releaseDate: new Date(),
    directedBy,
    duration,
    casts,
    synopsis,
    genre,
    image: `http://localhost:8000/img/${req.file.filename}`
  }
  moviesModels.updateMovies(id, data)
    .then((result) => {
      helper(res, 200, true, 'data has been updated', result);
    })
    .catch((err) => {
      console.log(err);
    })
}

exports.insertMovies = (req, res) => {
  const { movieName, directedBy, duration, casts, synopsis, genre } = req.body

  const data = {
    idMovie: uuidv4(),
    movieName,
    releaseDate: new Date(),
    directedBy,
    duration,
    casts,
    synopsis,
    genre,
    image: `http://localhost:8000/img/${req.file.filename}`
  }
  moviesModels.insertMovies(data)
    .then((result) => {
      helper(res, 200, true, 'insert data berhasil', result);
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
      if (result.length > 0) {
        const resultId = result
        client.setex(`movies_${idMovie}`, 60 * 60 * 12, JSON.stringify(resultId))
        // console.log(result.length);
        helper(res, 200, true, `${result.length} data found`, result);
        // if (result.length === 1) {
        // } else {
        //   helper(res, 200, true, `${result.length} data found`, result);
        // }
      } else {
        helper(res, 400, false, "movieId not found", null);
      }
    });
}




// get moviesName
exports.getMoviesBySearch = (req, res) => {
  // const name = req.query.name
  const idMovie = req.params.param
  moviesModels.getMoviesBySearch(idMovie)
    .then((result) => {
      helper(res, 200, true, "success", result);
    })
    .catch((err) => {
      helper(res, 404, false, err, null);
    })
}