const cinemasModels = require('../models/cinemas')
const helper = require('../helpers/helper')

exports.getcinemas = (req, res) => {
  cinemasModels.getcinemas()
    .then((result) => {
      helper(res, 200, true, 'get data success', result)
    })
    .catch((err) => {
      console.log(err)
    })
}

exports.updatecinemas = (req, res) => {
  const id = req.params.id
  const {
    name,
    location,
    adress,
    price
  } = req.body

  const data = {
    idCinemas,
    name,
    location,
    image: `http://localhost:8000/img/${req.file.filename}`,
    adress,
    price
  }
  cinemasModels.updatecinemas(id, data)
    .then((result) => {
      helper(res, 200, true, 'data has been updated', result)
    })
    .catch((err) => {
      console.log(err)
    })
}

exports.insertcinemas = (req, res) => {
  const {
    name,
    location,
    adress,
    price
  } = req.body

  const data = {
    name,
    location,
    image: `http://localhost:8000/img/${req.file.filename}`,
    adress,
    price
  }
  cinemasModels.insertcinemas(data)
    .then((result) => {
      helper(res, 200, true, 'Create data succes')
    })
    .catch((err) => {
      console.log(err)
    })
}

exports.deletecinemas = (req, res) => {
  const id = req.params.id
  cinemasModels.deletecinemas(id)
    .then((result) => {
      helper(res, 200, true, 'delete success', result)
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
  cinemasModels
    .getcinemasFilter(order)
    .then((result) => {
      helper(res, 200, true, 'success', result)
    })
    .catch((err) => {
      helper(res, 404, false, err, null)
    })
}

exports.getcinemasSort = (req, res) => {
  const column = req.query.column
  const data = req.query.data

  cinemasModels
    .getcinemasSort(column, data)
    .then((result) => {
      helper(res, 200, true, 'success', result)
    })
    .catch((err) => {
      helper(res, 404, false, err, null)
    })
}

exports.getCinemaByLocation = async (req, res) => {
  try {
    const { location } = req.query
    const results = await cinemasModels.getCinemaLocation(location)
    console.log(results);
    if (results.length > 0) {
      return helper(res, 200, true, 'List of Location', results)
    }
    return helper(res, 404, false, 'Cinema Location Not Found')
  } catch (error) {
    return helper(res, 404, false, 'Bad Request')

  }
}
