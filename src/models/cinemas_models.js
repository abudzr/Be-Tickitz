const connection = require('../configs/db')

const cinemas = {
  // SELECT * FROM `cinemas`
  // untuk menampilkan semua data
  getcinemas: () => {
    return new Promise((resolve, reject) => {
      connection.query('SELECT idCinemas, movie.movieName, movie.duration, movie.genre, name, location FROM cinemas INNER JOIN movie USING (idMovie)', (err, results) => {
        if (!err) {
          resolve(results)
        } else {
          reject(err)
        }
      })
    })
  },
  // untuk menampilkan data by id
  getcinemasById: (id) => {
    return new Promise((resolve, reject) => {
      connection.query('SELECT idCinemas, movie.movieName, movie.duration, movie.genre, name, location FROM cinemas INNER JOIN movie USING (idMovie) WHERE idCinemas= ?', id, (err, results) => {
        if (!err) {
          resolve(results)
        } else {
          reject(err)
        }
      })
    })
  },
  getcinemasFilter: (order) => {
    return new Promise((resolve, reject) => {
      connection.query(`SELECT idCinemas, movie.movieName, movie.duration, movie.genre, name, location FROM cinemas INNER JOIN movie USING (idMovie) ORDER BY ${order}`, (err, results) => {
        if (!err) {
          resolve(results)
        } else {
          reject(err)
        }
      })
    })
  },

  getcinemasSort: (column, data) => {
    return new Promise((resolve, reject) => {
      connection.query(`SELECT idCinemas, movie.movieName, movie.duration, movie.genre, name, location FROM cinemas INNER JOIN movie USING (idMovie) WHERE ${column}=? `, data, (err, results) => {
        if (!err) {
          resolve(results)
        } else {
          reject(err)
        }
      })
    })
  },

  // untuk menambahkan data
  insertcinemas: (data) => {
    return new Promise((resolve, reject) => {
      connection.query('INSERT INTO cinemas SET ?', data, (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(err)
        }
      })
    })
  },

  // menghapus data by id
  deletecinemas: (id) => {
    return new Promise((resolve, reject) => {
      connection.query('DELETE FROM cinemas WHERE idCinemas = ?', id, (err, results) => {
        if (!err) {
          resolve(results)
        } else {
          reject(err)
        }
      })
    })
  },

  // update data
  updatecinemas: (id, data) => {
    return new Promise((resolve, reject) => {
      connection.query('UPDATE cinemas SET ? WHERE idCinemas = ?', [data, id], (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(err)
        }
      })
    })
  }
}

module.exports = cinemas
