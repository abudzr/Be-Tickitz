const connection = require('../configs/db')

const movies = {
  getMoviesByCondition: (cond) => {
    return new Promise((resolve, reject) => {
      const query = connection.query(`
      SELECT m.*, GROUP_CONCAT(DISTINCT g.name ORDER BY g.name DESC SEPARATOR ', ') AS genre 
      FROM movie m 
      LEFT JOIN movie_genre mg on m.id = mg.idMovie 
      LEFT JOIN genre g on mg.idGenre = g.id 
      WHERE m.movieName LIKE "%${cond.search}%" 
      GROUP BY m.id, m.movieName, m.releaseDate, m.directedBy, m.duration, m.casts, m.synopsis,m.image, m.category, m.createdAt, m.updatedAt
      ORDER BY ${cond.sort} ${cond.order}
      LIMIT ${cond.limit} OFFSET ${cond.offset}
      `, (err, res, field) => {
        if (err) reject(err)
        resolve(res)
      })
      console.log(query.sql)
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


  getMovieById: (id) => {
    return new Promise((resolve, reject) => {
      const query = connection.query(`
      SELECT m.*, GROUP_CONCAT(DISTINCT g.name ORDER BY g.name DESC SEPARATOR ', ') AS genre 
      FROM movie m 
      LEFT JOIN movie_genre mg on m.id = mg.idMovie 
      LEFT JOIN genre g on mg.idGenre = g.id 
      WHERE m.id=${id} 
      GROUP BY m.id, m.movieName, m.releaseDate, m.directedBy, m.duration, m.casts, m.synopsis,m.image, m.category, m.createdAt, m.updatedAt
      `, (err, res, field) => {
        if (err) reject(err)
        resolve(res)
      })
      console.log(query.sql)
    })
  },

  getCountMovieCondition: (cond, status) => {
    return new Promise((resolve, reject) => {
      const query = connection.query(`SELECT COUNT(*) as totalData FROM
      movie WHERE movieName LIKE "%${cond.search}%" ${status ? `AND status = '${status}'` : ''}
      ORDER BY ${cond.sort} ${cond.order}`, (err, res, field) => {
        if (err) reject(err)
        resolve(res)
      })
      console.log(query.sql)
    })
  },

  getMovieGenreById: (id) => {
    return new Promise((resolve, reject) => {
      const query = connection.query(`
      SELECT g.id, g.name AS genre FROM movie m INNER JOIN movie_genre mg on m.id = mg.idMovie INNER JOIN genre g on mg.idGenre = g.id WHERE m.id=${id}
      `, (err, res, field) => {
        if (err) reject(err)
        resolve(res)
      })
      console.log(query.sql)
    })
  },

  getMovieShow: (cond) => {
    return new Promise((resolve, reject) => {
      connection.query(`
        SELECT m.*, GROUP_CONCAT(DISTINCT g.name ORDER BY g.name DESC SEPARATOR ', ') AS genre 
        FROM movie m 
        LEFT JOIN movie_genre mg on m.id = mg.idMovie 
        LEFT JOIN genre g on mg.idGenre = g.id 
        WHERE m.movieName LIKE "%${cond.search}%" AND m.status = 'nowShowing'
        GROUP BY  m.id, m.movieName, m.releaseDate, m.directedBy, m.duration, m.casts, m.synopsis,m.image, m.category, m.createdAt, m.updatedAt
        ORDER BY ${cond.sort} ${cond.order}
        LIMIT ${cond.limit} OFFSET ${cond.offset}
        `, (err, res, field) => {
        if (err) reject(err)
        resolve(res)
      })
    })
  },

  getMovieUp: (cond) => {
    return new Promise((resolve, reject) => {
      connection.query(`
        SELECT m.*, GROUP_CONCAT(DISTINCT g.name ORDER BY g.name DESC SEPARATOR ', ') AS genre 
        FROM movie m 
        LEFT JOIN movie_genre mg on m.id = mg.idMovie 
        LEFT JOIN genre g on mg.idGenre = g.id 
        WHERE m.movieName LIKE "%${cond.search}%" AND m.status = 'upComing'
        GROUP BY  m.id, m.movieName, m.releaseDate, m.directedBy, m.duration, m.casts, m.synopsis,m.image, m.category, m.createdAt, m.updatedAt
        ORDER BY ${cond.sort} ${cond.order}
        LIMIT ${cond.limit} OFFSET ${cond.offset}
        `, (err, res, field) => {
        if (err) reject(err)
        resolve(res)
      })
    })
  },

  insertMovies: (data = {}) => {
    return new Promise((resolve, reject) => {
      const query = connection.query(`
        INSERT INTO movie
        (${Object.keys(data).join()})
        VALUES
        (${Object.values(data).map(item => `"${item}"`).join(',')})
        `, (err, res, field) => {
        if (err) reject(err)
        resolve(res)
      })
      console.log(query.sql)
    })
  },

  updateMovie: (id, data) => {
    return new Promise((resolve, reject) => {
      const key = Object.keys(data)
      const value = Object.values(data)
      connection.query(`
        UPDATE movie
        SET ${key.map((item, index) => `${item}="${value[index]}"`)}
        WHERE id=${id}
      `, (err, res, field) => {
        if (err) reject(err)
        resolve(res)
      })
    })
  },

  deleteMovies: (id) => {
    return new Promise((resolve, reject) => {
      connection.query('DELETE FROM movie WHERE id = ?', id, (err, results) => {
        if (!err) {
          resolve(results)
        } else {
          reject(err.message)
        }
      })
    })
  }

}

module.exports = movies
