const connection = require('../configs/db')

exports.getSeatByIdShowtime = (id) => {
    return new Promise((resolve, reject) => {
        connection.query(`
    SELECT name FROM seats
    WHERE idShowtime=${id}
    `, (err, res, field) => {
            if (err) reject(err)
            resolve(res)
        })
    })
}