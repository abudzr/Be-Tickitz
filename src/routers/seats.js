const express = require('express')
const router = express.Router()
const seatsController = require('../controllers/seats')


router.get('/:id', seatsController.listSeatSoldByShowtime)

module.exports = router
