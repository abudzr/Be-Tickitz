const { URL } = process.env
const moviesModels = require('../models/movies')
const genreModels = require('../models/genre')
const moviesGenreModels = require('../models/moviesGenre')
const qs = require('querystring')
const fs = require('fs')
const helper = require('../helpers/helper')
const { v4: uuidv4 } = require('uuid')
const redis = require('redis')
const client = redis.createClient(6379)
const validation = require('../helpers/validation')

exports.listMovies = async (req, res) => {
  try {
    const cond = req.query
    cond.search = cond.search || ''
    cond.page = Number(cond.page) || 1
    cond.limit = Number(cond.limit) || 5
    cond.offset = (cond.page * cond.limit) - cond.limit
    cond.sort = cond.sort || 'id'
    cond.order = cond.order || 'ASC'
    const results = await moviesModels.getMoviesByCondition(cond)

    const totalData = await moviesModels.countMovie()
    const totalPage = Math.ceil(Number(totalData[0].totalData) / cond.limit)
    return helper(res, 200, true, 'List of all Movies', results,
      {
        totalData: results.length,
        currentPage: cond.page,
        totalPage,
        nextLink: cond.page < totalPage ? `${URL}/movies?${qs.stringify({ ...req.query, ...{ page: cond.page + 1 } })}` : null,
        prevLink: cond.page > 1 ? `${URL}/movies?${qs.stringify({ ...req.query, ...{ page: cond.page - 1 } })}` : null
      }
    )
    // return helper(res, 200, true, 'List of all Movies', results)
  } catch (error) {
    console.log(error)
    return helper(res, 400, false, 'Bad Request')
  }
}

exports.getMoviesAll = (req, res) => {
  moviesModels.getMoviesAll()
    .then((result) => {
      const resultMovies = result
      client.setex('getAllMovies', 60 * 60 * 12, JSON.stringify(resultMovies))
      helper(res, 200, true, 'success', resultMovies)
    })
    .catch((err) => {
      console.log(err)
    })
}

exports.getMoviesById = (req, res) => {
  const { id } = req.params
  moviesModels.getMovieById(id)
    .then((result) => {
      if (result.length > 0) {
        const resultId = result
        client.setex(`movies_${id}`, 60 * 60 * 12, JSON.stringify(resultId))
        // console.log(result.length);
        helper(res, 200, true, `${result.length} data found`, result)
      } else {
        helper(res, 400, false, 'movieId not found', null)
      }
    })
}

exports.getMoviesGenreById = (req, res) => {
  const { id } = req.params
  moviesModels.getMovieGenreById(id)
    .then((result) => {
      if (result.length > 0) {
        const resultId = result
        client.setex(`movies_${id}`, 60 * 60 * 12, JSON.stringify(resultId))
        // console.log(result.length);
        helper(res, 200, true, `${result.length} data found`, result)
      } else {
        helper(res, 400, false, 'movieId not found', null)
      }
    })
}

exports.getMovieNowShowing = async (req, res) => {
  try {
    const cond = req.query
    cond.search = cond.search || ''
    cond.page = Number(cond.page) || 1
    cond.limit = Number(cond.limit) || 5
    cond.offset = (cond.page * cond.limit) - cond.limit
    cond.sort = cond.sort || 'id'
    cond.order = cond.order || 'ASC'

    const results = await moviesModels.getMovieShow(cond)
    const status = 'nowShowing'

    const totalData = await moviesModels.getCountMovieCondition(cond, status)
    const totalPage = Math.ceil(Number(totalData[0].totalData) / cond.limit)

    return helper(res, 200, true, 'List of Now Showing Movies', results,
      {
        totalData: results.length,
        currentPage: cond.page,
        totalPage,
        nextLink: cond.page < totalPage ? `${URL}/movies/nowShowing?${qs.stringify({ ...req.query, ...{ page: cond.page + 1 } })}` : null,
        prevLink: cond.page > 1 ? `${URL}/movies/nowShowing?${qs.stringify({ ...req.query, ...{ page: cond.page - 1 } })}` : null
      }
    )
  } catch (error) {
    console.log(error)
    return response(res, 400, false, 'Bad Request')
  }
}

exports.getMovieUpComing = async (req, res) => {
  try {
    const cond = req.query
    cond.search = cond.search || ''
    cond.page = Number(cond.page) || 1
    cond.limit = Number(cond.limit) || 5
    cond.offset = (cond.page * cond.limit) - cond.limit
    cond.sort = cond.sort || 'id'
    cond.order = cond.order || 'ASC'

    const results = await moviesModels.getMovieUp(cond)
    const status = 'upComing'

    const totalData = await moviesModels.getCountMovieCondition(cond, status)
    const totalPage = Math.ceil(Number(totalData[0].totalData) / cond.limit)

    return helper(res, 200, true, 'List of Up Coming Movies', results,
      {
        totalData: results.length,
        currentPage: cond.page,
        totalPage,
        nextLink: cond.page < totalPage ? `${URL}movies/upComing?${qs.stringify({ ...req.query, ...{ page: cond.page + 1 } })}` : null,
        prevLink: cond.page > 1 ? `${URL}movies/upComing?${qs.stringify({ ...req.query, ...{ page: cond.page - 1 } })}` : null
      }
    )
  } catch (error) {
    console.log(error)
    return response(res, 400, false, 'Bad Request')
  }
}

exports.insertMovies = async (req, res) => {
  const valid = validation.validationMovie(req.body)
  if (valid.error) {
    return helper(res, 400, false, valid.error.details[0].message)
  }

  try {
    const { movieName, releaseDate, directedBy, duration, casts, synopsis, category } = req.body
    // let image;
    console.log(req.file);
    // if (!req.file) {
    //   helper.printError(res, 400, "Image is required");
    //   return;
    // } else {
    //   image = {`${req.file.filename}`};
    // }
    const data = {
      movieName,
      releaseDate,
      directedBy,
      duration,
      casts,
      synopsis,
      image: `images\\\\${req.file.filename}`,
      category
    }
    const { idGenre } = req.body
    const selectedGenre = []
    if (typeof idGenre === 'object') {
      const results = await genreModels.checkGenres(idGenre)
      // console.log(results)
      if (results.length !== idGenre.length) {
        return helper(res, 400, false, 'Some genre are unavailable')
      } else {
        results.forEach(item => {
          selectedGenre.push(item.id)
        })
      }
    } else if (typeof idGenre === 'string') {
      const results = await genreModels.checkGenres([idGenre])
      if (results.length !== idGenre.length) {
        return helper(res, 400, false, 'Some genre are unavailable')
      } else {
        results.forEach(item => {
          selectedGenre.push(item.id)
        })
      }
    }
    const date = new Date()
    let initialResult
    const splitReleaseDate = data.releaseDate.split('-')
    // console.log(Number(splitReleaseDate[1]))
    if ((Number(splitReleaseDate[1])) > (date.getMonth() + 1)) {
      initialResult = await moviesModels.insertMovies({ ...data, status: 'upComing' })
    } else {
      initialResult = await moviesModels.insertMovies({ ...data, status: 'nowShowing' })
    }
    if (initialResult.affectedRows > 0) {
      if (selectedGenre.length > 0) {
        await moviesGenreModels.createMoviesGenre(initialResult.insertId, selectedGenre)
        return helper(res, 200, true, 'Movie successfully created')
      }
      return helper(res, 400, false, 'Failed to create Movie')
    }

  } catch (error) {
    console.log(error);
    return helper(res, 400, false, 'Bad Request')
  }
}

exports.updateMovie = async (req, res) => {
  try {
    const { id } = req.params
    const { movieName, releaseDate, directedBy, duration, casts, synopsis, category } = req.body
    const { idGenre } = req.body
    const selectedGenre = []
    if (typeof idGenre === 'object') {
      const results = await genreModels.checkGenres(idGenre)
      // console.log(results)
      if (results.length !== idGenre.length) {
        return helper(res, 400, false, 'Some genre are unavailable')
      } else {
        results.forEach(item => {
          selectedGenre.push(item.id)
        })
      }
    } else if (typeof idGenre === 'string') {
      const results = await genreModels.checkGenres([idGenre])
      if (results.length !== idGenre.length) {
        return helper(res, 400, false, 'Some genre are unavailable')
      } else {
        results.forEach(item => {
          selectedGenre.push(item.id)
        })
      }
    }

    const initialResult = await moviesModels.getMovieById(id)
    console.log(initialResult);
    const data = {
      movieName: movieName === undefined ? initialResult[0].movieName : movieName,
      releaseDate: releaseDate === undefined ? initialResult[0].releaseDate : releaseDate,
      directedBy: directedBy === undefined ? initialResult[0].directedBy : directedBy,
      duration: duration === undefined ? initialResult[0].duration : duration,
      casts: casts === undefined ? initialResult[0].casts : casts,
      synopsis: synopsis === undefined ? initialResult[0].synopsis : synopsis,
      image: req.file === undefined ? initialResult[0].image : `images\\\\${req.file.filename}`,
      category: category === undefined ? initialResult[0].category : category
    }
    const initialSplit = initialResult[0].image.split('/');
    if (initialResult.length > 0) {
      fs.unlink(`${initialSplit[0]}`,
        function (err) {
          if (err) {
            console.log('something wrong');
          }
          console.log('Image Update Old File deleted!')
        }
      )
      const finalResult = await moviesGenreModels.getMovieGenreById(id)
      // console.log(selectedGenre.length === finalResult.length)
      const idMovieGenre = finalResult.map((item) => item.id)
      if ((finalResult.length === selectedGenre.length)) {
        for (let i = 0; i < idMovieGenre.length; i++) {
          await moviesGenreModels.updateMoviesGenre(idMovieGenre[i], selectedGenre[i])
          // console.log(selectedGenre)
        }
        await moviesModels.updateMovie(id, data)
        return helper(res, 200, true, `Movie id ${id} updated successfully`, { ...initialResult[0], ...data })
      } else if (selectedGenre.length > finalResult.length) {
        for (let i = 0; i < idMovieGenre.length; i++) {
          await moviesGenreModels.updateMoviesGenre(idMovieGenre[i], selectedGenre[i])
        }
        await moviesGenreModels.createMoviesGenre(id, selectedGenre.slice(finalResult.length))
        await moviesModels.updateMovie(id, data)
        return helper(res, 200, true, `Movie id ${id} updated successfully`, { ...initialResult[0], ...data })
      } else if (selectedGenre.length < finalResult.length) {
        for (let i = 0; i < selectedGenre.length; i++) {
          await moviesGenreModels.updateMoviesGenre(idMovieGenre[i], selectedGenre[i])
        }
        await moviesGenreModels.deleteMovieGenreById(idMovieGenre.slice(selectedGenre.length))
        await moviesModels.updateMovie(id, data)
        return helper(res, 200, true, `Movie id ${id} updated successfully`, { ...initialResult[0], ...data })
      }
    } else {
      return helper(res, 400, false, `Failed to update movie id ${id} `)
    }
  } catch (error) {
    return helper(res, 400, false, 'Bad Request')
  }
}

exports.deleteMovies = async (req, res) => {
  try {
    const { id } = req.params
    const initialResult = await moviesModels.getMovieById(id)
    // console.log(initialResult[0].image);
    const initialSplit = initialResult[0].image.split('/');
    // console.log(initialSplit[4]);
    if (initialResult.length > 0) {
      fs.unlink(`week - 4 / tickitz.id /../../ images / ${initialSplit[4]} `,
        function (err) {
          if (err) {
            console.log('something wrong');
          }
          console.log('Image Update Old File deleted!')
        }
      )
      await moviesModels.deleteMovies(id)
      // console.log(results);
      return helper(res, 200, true, `Movie id ${id} deleted successfully`)
    }
    return helper(res, 400, false, `Failed to delete movie id ${id} `)
  } catch (error) {
    console.log(error);
    return helper(res, 400, false, 'Bad Request')
  }
}

const removeImage = (filePath) => {
  filePath = path.join(__dirname, "../../", filePath);
  fs.unlink(filePath, (err) => new Error(err));
};