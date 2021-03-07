const connection = require('../configs/db')

const transactions = {
  // SELECT * FROM `transaction`
  // untuk menampilkan semua data
  getTransactions: () => {
    return new Promise((resolve, reject) => {
      connection.query('SELECT idTransaction, idUsers, movie.movieName, tickets.schedule, paymentMethod, dateTime, seats, tickets.price*count AS TotalPrice FROM transaction INNER JOIN tickets USING (idTickets) JOIN movie USING (idMovie) ORDER BY dateTime DESC ', (err, results) => {
        if (!err) {
          resolve(results)
        } else {
          reject(err)
        }
      })
    })
  },
  // untuk menampilkan data by id
  // SELECT * FROM `transaction` WHERE id=1
  getTransactionsById: (id) => {
    return new Promise((resolve, reject) => {
      connection.query('SELECT idTransaction, idUsers, movie.movieName, tickets.schedule, paymentMethod, dateTime, seats, tickets.price*count AS TotalPrice FROM transaction INNER JOIN tickets USING (idTickets) JOIN movie USING (idMovie) WHERE idTransaction= ?', id, (err, results) => {
        if (!err) {
          resolve(results)
        } else {
          reject(err)
        }
      })
    })
  },

  // untuk menambahkan data
  insertTransactions: (data) => {
    return new Promise((resolve, reject) => {
      connection.query('INSERT INTO transaction SET ?', data, (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(err)
        }
      })
    })
  },

  // menghapus data by id
  deleteTransactions: (id) => {
    return new Promise((resolve, reject) => {
      connection.query('DELETE FROM transaction WHERE idTransaction = ?', id, (err, results) => {
        if (!err) {
          resolve(results)
        } else {
          reject(err)
        }
      })
    })
  },

  // update data
  updateTransactions: (id, data) => {
    return new Promise((resolve, reject) => {
      connection.query('UPDATE transaction SET ? WHERE idTransaction = ?', [data, id], (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(err)
        }
      })
    })
  }
}

module.exports = transactions
