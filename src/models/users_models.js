const connection = require('../configs/db')

const users = {
  // SELECT * FROM `users`
  // untuk menampilkan semua data
  getUsers: () => {
    return new Promise((resolve, reject) => {
      connection.query('SELECT * FROM users', (err, results) => {
        if (!err) {
          resolve(results)
        } else {
          reject(err)
        }
      })
    })
  },
  // untuk menampilkan data by id
  // SELECT * FROM `users` WHERE id=1
  getUsersById: (id) => {
    return new Promise((resolve, reject) => {
      connection.query('SELECT * FROM users WHERE idUsers= ? ', id, (err, results) => {
        if (!err) {
          resolve(results)
        } else {
          reject(err)
        }
      })
    })
  },

  // untuk menambahkan data
  insertUsers: (data) => {
    return new Promise((resolve, reject) => {
      connection.query('INSERT INTO users SET ?', data, (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(err)
        }
      })
    })
  },

  // menghapus data by id
  // tidak ada delete
  deleteUsers: (id) => {
    return new Promise((resolve, reject) => {
      connection.query('DELETE FROM users WHERE idUsers = ?', id, (err, results) => {
        if (!err) {
          resolve(results)
        } else {
          reject(err)
        }
      })
    })
  },

  // update data
  updateUsers: (id, data) => {
    return new Promise((resolve, reject) => {
      connection.query('UPDATE users SET ? WHERE idUsers = ?', [data, id], (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(err)
        }
      })
    })
  }
}

module.exports = users
