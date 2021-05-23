const connection = require('../configs/db')

const users = {
  // SELECT * FROM `users`
  // untuk menampilkan semua data
  findUsers: (email) => {
    return new Promise((resolve, reject) => {
      connection.query('SELECT * FROM users WHERE email= ?', email, (err, results) => {
        if (!err) {
          resolve(results)
        } else {
          reject(err)
        }
      })
    })
  },
  findUser: (id, message) => {
    return new Promise((resolve, reject) => {
      connection.query("SELECT * FROM users WHERE idUsers = ?", id, (err, result) => {
        if (!err) {
          if (result.length == 1) {
            resolve(result);
          } else {
            reject(new Error(`Cannot ${message} users with id = ${id}`));
          }
        } else {
          reject(new Error("Internal server error"));
        }
      });
    })
  },
  findToken: (token) => {
    return new Promise((resolve, reject) => {
      connection.query(
        "SELECT token FROM user_token WHERE token = ?",
        token,
        (err, result) => {
          if (!err) {
            resolve(result);
          } else {
            reject(new Error("Internal server error"));
          }
        }
      );
    });
  },
  deleteToken: (email) => {
    return new Promise((resolve, reject) => {
      connection.query(
        "DELETE FROM user_token WHERE email = ?",
        email,
        (err, result) => {
          if (!err) {
            resolve(result);
          } else {
            reject(new Error("Internal server error"));
          }
        }
      );
    });
  },

  // findReset: (reset) => {
  //   return new Promise((resolve, reject) => {
  //     connection.query('SELECT * FROM users WHERE reset= ?', reset, (err, results) => {
  //       if (!err) {
  //         resolve(results)
  //       } else {
  //         reject(err)
  //       }
  //     })
  //   })
  // },
  setPassword: (password, email) => {
    return new Promise((resolve, reject) => {
      connection.query(
        "UPDATE users SET password = ? WHERE email = ?",
        [password, email],
        (err, result) => {
          if (!err) {
            resolve(result);
          } else {
            reject(new Error("Internal server error"));
          }
        }
      );
    });
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
  getUsers: () => {
    return new Promise((resolve, reject) => {
      connection.query('SELECT * FROM users ', (err, results) => {
        if (!err) {
          resolve(results)
        } else {
          reject(err)
        }
      })
    })
  },

  // update data
  updateUsers: (data, id) => {
    return new Promise((resolve, reject) => {
      connection.query('UPDATE users SET ? WHERE idUsers = ?', [data, id], (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(err)
        }
      })
    })
  },
  verifiedAccount: (data, id) => {
    return new Promise((resolve, reject) => {
      connection.query('UPDATE users SET ? WHERE idUsers = ?', [data, id], (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(err)
        }
      })
    })
  },
  createUsersToken: (data) => {
    return new Promise((resolve, reject) => {
      connection.query("INSERT INTO user_token SET ?", data, (err, result) => {
        if (!err) {
          resolve(result);
        } else {
          reject(new Error("Internal server error"));
        }
      });
    });
  }

}

module.exports = users
