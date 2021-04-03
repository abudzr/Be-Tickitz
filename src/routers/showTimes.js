const express = require('express')
const router = express.Router()
const showtimesControllers = require('../controllers/showTimes')
const auth = require('../middlewares/auth')
const admin = require('../middlewares/admin')

router
    .get('/:id', showtimesControllers.detailShowtime)
    .get('/by/:id', showtimesControllers.listShowtimeByMovie)
    .post('/', auth.verifyAccess, admin.onlyAdmin, showtimesControllers.createShowtime)
    .post('/searchLocation', showtimesControllers.listCinemaShowtime)
    .patch('/:id', auth.verifyAccess, admin.onlyAdmin, showtimesControllers.updateShowtime)
    .delete('/:id', auth.verifyAccess, admin.onlyAdmin, showtimesControllers.deleteShowtime)

module.exports = router
