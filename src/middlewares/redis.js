const redis = require('redis')
const client = redis.createClient(6379)
const helper = require('../helpers/helper')

const cacheAllMovies = (req, res, next) => {
    client.get('getAllMovies', (err, data) => {
        console.log('isinya apa', data);
        if (data !== null) {
            const result = JSON.parse(data)
            return helper(res, 200, true, 'success', result)
        } else {
            next()
        }
    })
}
const clearAllMovies = (req, res, next) => {
    client.del("getAllMovies")
    next()
}

module.exports = {
    cacheAllMovies,
    clearAllMovies
}