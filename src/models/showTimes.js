const connection = require('../configs/db')



exports.getShowtimeWithCinemaAndMovie = (id) => {
    return new Promise((resolve, reject) => {
        const query = connection.query(`
    SELECT s.id, m.movieName AS movie, c.name AS cinema, s.showtime, s.showtimeDate 
    FROM showtimes s 
    INNER JOIN cinemas c on c.idcinemas = s.idcinemas 
    INNER JOIN movie m on m.id = s.idMovie 
    WHERE s.idMovie=${id}
    `, (err, res) => {
            if (err) reject(err)
            resolve(res)
        })
        console.log(query.sql)
    })
}

exports.getShowtimesById = (id) => {
    return new Promise((resolve, reject) => {
        connection.query(`
    SELECT s.id, m.movieName AS movie, c.name AS cinema, c.image AS image, TIME_FORMAT(s.showtime, "%h:%i%p") AS showtime, s.showtimeDate, c.price, m.id AS idMovie, c.idcinemas AS idcinemas
    FROM showtimes s 
    INNER JOIN cinemas c on c.idcinemas = s.idcinemas 
    INNER JOIN movie m on m.id = s.idMovie 
    WHERE s.id=${id}
    `, (err, res) => {
            if (err) reject(err)
            resolve(res)
        })
    })
}


exports.getCinemaShowtimeById = (id) => {
    return new Promise((resolve, reject) => {
        const query = connection.query(`
    SELECT id FROM showtimes WHERE idMovie=${id}
    `, (err, res) => {
            if (err) reject(err)
            resolve(res)
        })
        console.log(query.sql)
    })
}

exports.getShowtimeByMovie = (id) => {
    return new Promise((resolve, reject) => {
        const query = connection.query(`
        SELECT showtimeDate FROM showtimes WHERE idMovie=${id}
      `, (err, res) => {
            if (err) reject(err)
            resolve(res)
        })
        console.log(query.sql)
    })
}


exports.getLocationCinema = (location, date, idMovie) => {
    return new Promise((resolve, reject) => {
        const query = connection.query(`
      SELECT c.location, s.showtimeDate, s.idMovie, s.idCinemas, s.id AS idShowtime FROM cinemas c 
      INNER JOIN showtimes s ON s.idCinemas = c.idCinemas 
      WHERE c.location LIKE "%${location}%" AND s.showtimeDate LIKE "%${date}%" AND s.idMovie LIKE "%${idMovie}%"
      `, (err, res) => {
            if (err) reject(err)
            resolve(res)
        })
        console.log(query.sql)
    })
}

exports.getShowtime = (id) => {
    return new Promise((resolve, reject) => {
        const query = connection.query(`
      SELECT id, idCinemas, idMovie, showtimeDate, TIME_FORMAT(showtime, "%h:%i%p") AS showtime, createdAt, updatedAt FROM showtimes
      WHERE id IN (${id.map(item => `${item}`).join()})
      `, (err, res) => {
            if (err) reject(err)
            resolve(res)
        })
        console.log(query.sql)
    })
}

exports.getCinema = (id) => {
    return new Promise((resolve, reject) => {
        const query = connection.query(`
      SELECT * FROM cinemas
      WHERE idCinemas IN (${id.map(item => `${item}`).join()})
      `, (err, res) => {
            if (err) reject(err)
            resolve(res)
        })
        console.log(query.sql)
    })
}


exports.createCinemaShowtimes = (idcinemas, idMovie, showtime, showtimeDate) => {
    return new Promise((resolve, reject) => {
        const query = connection.query(`
    INSERT INTO showtimes
    (idcinemas, idMovie, showtime, showtimeDate) 
    VALUES ${idcinemas.map(cinema => showtime.map(showtime => `(${cinema}, ${idMovie}, '${showtime}', '${showtimeDate}')`).join()).join()}`, (err, res) => {
            if (err) reject(err)
            resolve(res)
        })
        console.log(query.sql)
    })
}

exports.updateCinemaShowtime = (id, showtime) => {
    return new Promise((resolve, reject) => {
        const query = connection.query(`
      UPDATE showtimes 
      SET showtime='${showtime}'
      WHERE id=${id}`, (err, res) => {
            if (err) reject(err)
            resolve(res)
        })
        console.log(query.sql)
    })
}

exports.updateShowtime = (id, data) => {
    return new Promise((resolve, reject) => {
        const key = Object.keys(data)
        const value = Object.values(data)
        const query = connection.query(`
        UPDATE showtimes
        SET ${key.map((item, index) => `${item}='${value[index]}'`)}
        WHERE idMovie=${id}
      `, (err, res) => {
            if (err) reject(err)
            resolve(res)
        })
        console.log(query.sql)
    })
}

exports.deleteCinemaShowtimeById = (id) => {
    return new Promise((resolve, reject) => {
        const query = connection.query(`
    DELETE FROM showtimes WHERE id IN (${id.map(item => `${item}`).join()})
  `, (err, res) => {
            if (err) reject(err)
            resolve(res)
        })
        console.log(query.sql)
    })
}



exports.deleteShowtimeById = (id) => {
    return new Promise((resolve, reject) => {
        const query = connection.query(`
    DELETE FROM showtimes WHERE id=${id}
  `, (err, res) => {
            if (err) reject(err)
            resolve(res)
        })
        console.log(query.sql)
    })
}