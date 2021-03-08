require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')

const port = process.env.PORT
// const bodyParser = require('body-parser')
const ticketsRouter = require('./src/routers/tickets')
const usersRouter = require('./src/routers/users')
const moviesRouter = require('./src/routers/movie')
const transactionsRouter = require('./src/routers/transactions')

// parse application/x-www-form-urlencoded
app.use(express.urlencoded({
    extended: false
}))
app.use(express.json())
app.use(cors())

// router
app.use('/tickets', ticketsRouter)
app.use('/users', usersRouter)
app.use('/movies', moviesRouter)
// app.use('/movies/search', moviesRouter)

app.use('/transactions', transactionsRouter)

app.listen(port, () => {
    console.log('server is running port ' + port)
})