const connection = require('../configs/db')

const cinemas = {

  getcinemas: () => {
    return new Promise((resolve, reject) => {
      connection.query('SELECT * FROM cinemas ', (err, results) => {
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
      connection.query('SELECT * FROM cinemas WHERE idCinemas= ?', id, (err, results) => {
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
      connection.query(`SELECT * FROM cinemas  ORDER BY ${order}`, (err, results) => {
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
      connection.query(`SELECT * FROM cinemas WHERE ${column}=? `, data, (err, results) => {
        if (!err) {
          resolve(results)
        } else {
          reject(err)
        }
      })
    })
  },
  getCinemaLocation: (location) => {
    return new Promise((resolve, reject) => {
      connection.query(`SELECT * FROM cinemas WHERE location LIKE "%${location}%" `, (err, results,) => {
        if (!err) {
          resolve(results)
        } else {
          reject(err)
        }
      })
    })
  },


  insertcinemas: (data = {}) => {
    return new Promise((resolve, reject) => {
      connection.query(`
      INSERT INTO cinemas
      (${Object.keys(data).join()})
      VALUES
      (${Object.values(data).map(item => `"${item}"`).join(',')})
      `, (err, res, field) => {
        if (err) reject(err)
        resolve(res)
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
