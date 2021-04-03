const connection = require('../configs/db')

const transactions = {
  createTransaction: (data = {}) => {
    return new Promise((resolve, reject) => {
      const query = connection.query(`
      INSERT INTO transactions
      (${Object.keys(data).join()})
      VALUES
      (${Object.values(data).map(item => `${item}`).join(',')})
      `, (err, res) => {
        if (err) reject(err)
        resolve(res)
      })
      console.log(query.sql)
    })
  },

  createSoldSeat: (idShowtime, seat) => {
    return new Promise((resolve, reject) => {
      const query = connection.query(`
      INSERT INTO seats
      (idShowtime, name) 
      VALUES ${seat.map(item => `(${idShowtime}, '${item}')`).join()}`, (err, res, field) => {
        if (err) reject(err)
        resolve(res)
      })
      console.log(query.sql)
    })
  },

  getUserTransactionById: (id) => {
    return new Promise((resolve, reject) => {
      const query = connection.query(`SELECT t.id, u.email, m.movieName AS movie, m.category, c.name AS cinema, c.price, s.showtime AS showtime, s.showtimeDate, t.seats, t.ticketCount, t.totalPayment FROM transactions t
      LEFT JOIN users u on u.idUsers = t.idUsers
      LEFT JOIN movie m on m.id = t.idMovie
      LEFT JOIN cinemas c on c.idCinemas = t.idCinemas
      LEFT JOIN showtimes s on s.id = t.idShowtime
      WHERE t.id=${id}`, (err, res, field) => {
        if (err) reject(err)
        resolve(res)
      })
      console.log(query.sql)
    })
  },

  getUserTransactionByIdUser: (id) => {
    return new Promise((resolve, reject) => {
      const query = connection.query(`SELECT u.email, m.movieName AS movie, c.name AS cinema, c.image, s.showtime AS showtime, t.id, t.seats, t.ticketCount, t.totalPayment, t.createdAt FROM transactions t
      LEFT JOIN users u on u.idUsers = t.idUsers
      LEFT JOIN movie m on m.id = t.idMovie
      LEFT JOIN cinemas c on c.idCinemas = t.idCinemas
      LEFT JOIN showtimes s on s.id = t.idShowtime
      WHERE t.idUsers=${id}`, (err, res, field) => {
        if (err) reject(err)
        resolve(res)
      })
      console.log(query.sql)
    })
  }
}

module.exports = transactions
