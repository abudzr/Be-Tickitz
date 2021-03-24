const connection = require('../configs/db')

const movies = {
  // get movies
  getMovies: (start, limit) => {
    return new Promise((resolve, reject) => {
      connection.query(`SELECT * FROM movie ORDER BY releaseDate DESC limit ${start},${limit} `, (err, results) => {
        if (!err) {
          resolve(results)
        } else {
          reject(err.message)
        }
      })
    })
  },
  getMoviesAll: () => {
    return new Promise((resolve, reject) => {
      connection.query('SELECT * FROM movie', (err, results) => {
        if (!err) {
          resolve(results)
        } else {
          reject(err.message)
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
          reject(err.message)
        }
      })
    })
  },

  //   get movies by movieName
  // SELECT * FROM `movie` WHERE movieName like 'sp%'
  getMoviesBySearch: (name) => {
    return new Promise((resolve, reject) => {
      connection.query(`SELECT * FROM movie WHERE movieName LIKE '%${name}%'`, (err, results) => {
        if (!err) {
          resolve(results)
        } else {
          reject('movie tidak ada')
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
          reject(err.message)
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
          reject(err.message)
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
          reject(err.message)
        }
      })
    })
  }
}

module.exports = movies
