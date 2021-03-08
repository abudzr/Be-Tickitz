const connection = require('../configs/db')

const tickets = {
  // SELECT * FROM `tickets`
  // untuk menampilkan semua data
  getTickets: () => {
    return new Promise((resolve, reject) => {
      connection.query('SELECT idTickets, movie.movieName, movie.duration, movie.genre, schedule, price FROM tickets INNER JOIN movie USING (idMovie) ORDER BY schedule DESC', (err, results) => {
        if (!err) {
          resolve(results)
        } else {
          reject(err)
        }
      })
    })
  },
  // untuk menampilkan data by id
  getTicketsById: (id) => {
    return new Promise((resolve, reject) => {
      connection.query('SELECT idTickets, movie.movieName, movie.duration, movie.genre, schedule, price FROM tickets INNER JOIN movie USING (idMovie) WHERE idTickets= ?', id, (err, results) => {
        if (!err) {
          resolve(results)
        } else {
          reject(err)
        }
      })
    })
  },

  // untuk menambahkan data
  insertTickets: (data) => {
    return new Promise((resolve, reject) => {
      connection.query('INSERT INTO tickets SET ?', data, (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(err)
        }
      })
    })
  },

  // menghapus data by id
  deleteTickets: (id) => {
    return new Promise((resolve, reject) => {
      connection.query('DELETE FROM tickets WHERE idTickets = ?', id, (err, results) => {
        if (!err) {
          resolve(results)
        } else {
          reject(err)
        }
      })
    })
  },

  // update data
  updateTickets: (id, data) => {
    return new Promise((resolve, reject) => {
      connection.query('UPDATE tickets SET ? WHERE idTickets = ?', [data, id], (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(err)
        }
      })
    })
  }
}

module.exports = tickets