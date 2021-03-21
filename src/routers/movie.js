const express = require('express')
const router = express.Router()
const movieController = require('../controllers/movies_controllers')
const auth = require('../middlewares/auth')
const multer = require('multer')

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/')
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname)
  }
})

const upload = multer({ storage: storage })
// const upload = multer({ dest: 'uploads/' })

router
  .get('/', auth.verifyAccess, movieController.getMovies)
  .get('/all', auth.verifyAccess, movieController.getMoviesAll)
  .get('/:idMovie', auth.verifyAccess, movieController.getMoviesById)
  .get('/search/:param', auth.verifyAccess, movieController.getMoviesBySearch)
  // .get('/', movieController.getMoviesBySearch)

  .post('/', auth.verifyAccess, upload.single('image'), movieController.insertMovies)
  .put('/:id', auth.verifyAccess, movieController.updateMovies)
  .delete('/:idMovie', auth.verifyAccess, movieController.deleteMovies)

module.exports = router