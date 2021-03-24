const cinemasModels = require('../models/cinemas_models')
const { v4: uuidv4 } = require('uuid');
const helper = require('../helpers/helper')

exports.getcinemas = (req, res) => {
    cinemasModels.getcinemas()
        .then((result) => {
            helper(res, 200, true, "get data success", result);
        })
        .catch((err) => {
            console.log(err)
        })
}

exports.updatecinemas = (req, res) => {
    const id = req.params.id
    const {
        idMovie,
        name,
        location

    } = req.body

    const data = {
        idMovie,
        name,
        location
    }
    cinemasModels.updatecinemas(id, data)
        .then((result) => {
            helper(res, 200, true, 'data has been updated', result);
        })
        .catch((err) => {
            console.log(err)
        })
}

exports.insertcinemas = (req, res) => {
    const {
        idMovie,
        name,
        location
    } = req.body

    const data = {
        idCinemas: uuidv4(),
        idMovie,
        name,
        location
    }
    cinemasModels.insertcinemas(data)
        .then((result) => {
            helper(res, 200, true, 'insert data berhasil', result);
        })
        .catch((err) => {
            console.log(err)
        })
}

exports.deletecinemas = (req, res) => {
    const id = req.params.id
    cinemasModels.deletecinemas(id)
        .then((result) => {
            helper(res, 200, true, "delete success", result);
        })
        .catch((err) => {
            console.log(err)
        })
}

exports.getcinemasById = (req, res) => {
    const id = req.params.id
    cinemasModels.getcinemasById(id)
        .then((result) => {
            res.json({
                data: result
            })
        })
}

exports.getcinemasFilter = (req, res) => {
    const order = req.query.order
    // const idMovie = req.params.param
    cinemasModels
        .getcinemasFilter(order)
        .then((result) => {
            helper(res, 200, true, "success", result);
        })
        .catch((err) => {
            helper(res, 404, false, err, null);
        })
}

exports.getcinemasSort = (req, res) => {
    const column = req.query.column
    const data = req.query.data

    cinemasModels
        .getcinemasSort(column, data)
        .then((result) => {
            helper(res, 200, true, "success", result);
        })
        .catch((err) => {
            helper(res, 404, false, err, null);
        })
}