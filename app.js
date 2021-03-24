require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT
const cors = require('cors')
const morgan = require('morgan')
const createError = require('http-errors')
// const bodyParser = require('body-parser')
const ticketsRouter = require('./src/routers/tickets')
const cinemasRouter = require('./src/routers/cinemas')
const usersRouter = require('./src/routers/users')
const moviesRouter = require('./src/routers/movie')
const transactionsRouter = require('./src/routers/transactions')

app.use(express.urlencoded({
  extended: false
}))
app.use(express.json())
app.use(cors())
app.use(morgan('dev'))

// router
app.use('/cinemas', cinemasRouter)
app.use('/tickets', ticketsRouter)
app.use('/users', usersRouter)
app.use('/movies', moviesRouter)
app.use('/transactions', transactionsRouter)
app.use('/img', express.static('./uploads'))

app.use('*', (req, res, next) => {
  const error = new createError.NotFound()
  next(error)
})

// error handling
app.use((err, req, res, next) => {
  if (!err.status) {
    err.status = 500
  }
  res.json({
    message: err.message,
    status_error: err.status
  })
})

app.listen(port, () => {
  console.log('server is running port ' + port)
})