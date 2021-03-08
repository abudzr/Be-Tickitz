const connection = require('../configs/db')

const movies = {
  // get movies
  getMovies: (start, limit) => {
    return new Promise((resolve, reject) => {
      connection.query(`SELECT * FROM movie ORDER BY releaseDate DESC limit ${start},${limit} `, (err, results) => {
        if (!err) {
          resolve(results)
        } else {
          reject(err)
        }
      })
    })
  },
  getMoviesById: (id) => {
    return new Promise((resolve, reject) => {
      connection.query('SELECT * FROM movie WHERE idMovie= ?', id, (err, results) => {
        if (!err) {
          resolve(results)
        } else {
          reject(err)
        }
      })
    })
  },

  //   get movies by movieName
  // SELECT * FROM `movie` WHERE movieName like 'sp%'
  getMoviesBySearch: (data) => {
    return new Promise((resolve, reject) => {
      connection.query('SELECT * FROM movie WHERE movieName like ? ', `%${data}%`, (err, results) => {
        if (!err) {
          resolve(results)
        } else {
          reject(err)
        }
      })
    })
  },

  // insert data
  insertMovies: (data) => {
    return new Promise((resolve, reject) => {
      connection.query('INSERT INTO movie SET ?', data, (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(err)
        }
      })
    })
  },

  // delete data
  deleteMovies: (id) => {
    return new Promise((resolve, reject) => {
      connection.query('DELETE FROM movie WHERE idMovie = ?', id, (err, results) => {
        if (!err) {
          resolve(results)
        } else {
          reject(err)
        }
      })
    })
  },

  // update data
  updateMovies: (id, data) => {
    return new Promise((resolve, reject) => {
      connection.query('UPDATE movie SET ? WHERE idMovie = ?', [data, id], (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(err)
        }
      })
    })
  }
}

module.exports = movies