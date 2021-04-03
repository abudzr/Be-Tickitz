const transactionModels = require('../models/transactions')
const cinemaModel = require('../models/cinemas')
const helper = require('../helpers/helper')

exports.createTransaction = async (req, res) => {
  try {
    const data = req.body
    if (typeof data.seat === 'object') {
      await transactionModels.createSoldSeat(data.idShowtime, data.seat)
      const seat = data.seat.map(item => item).join(', ')
      const countTicket = data.seat.join(',').split(',').length
      const checkCinema = await cinemaModel.getcinemasById(data.idCinemas)
      // console.log(checkCinema);
      if (checkCinema.length > 0) {
        const countTotalPayment = checkCinema[0].price * countTicket
        const results = await transactionModels.createTransaction({
          idUsers: req.data.idUsers,
          idMovie: data.idMovie,
          idCinemas: data.idCinemas,
          idShowtime: data.idShowtime,
          seats: `"${seat}"`,
          ticketCount: countTicket,
          totalPayment: countTotalPayment
        })
        const finalResult = await transactionModels.getUserTransactionById(results.insertId)
        return helper(res, 200, true, 'Transaction successfully created', finalResult)
      }
    } else if (typeof data.seat === 'string') {
      await transactionModels.createSoldSeat(data.idShowtime, [data.seat])
      const countTicket = [data.seat].length
      const checkCinema = await cinemaModel.getcinemasById(data.idCinemas)
      if (checkCinema.length > 0) {
        const countTotalPayment = checkCinema[0].price * countTicket
        const results = await transactionModels.createTransaction({
          idUsers: req.data.idUsers,
          idMovie: data.idMovie,
          idCinemas: data.idCinemas,
          idShowtime: data.idShowtime,
          seats: `"${data.seat}"`,
          ticketCount: countTicket,
          totalPayment: countTotalPayment
        })
        const finalResult = await transactionModels.getUserTransactionById(results.insertId)
        return helper(res, 200, true, 'Transaction successfully created', finalResult)
      }
    }
  } catch (error) {
    return helper(res, 400, false, 'Bad Request')
  }
}

exports.detailTransaction = async (req, res) => {
  try {
    const { id } = req.params
    const results = await transactionModels.getUserTransactionById(id)
    if (results.length > 0) {
      return helper(res, 200, true, 'Details of Transaction', results)
    }
    return helper(res, 404, false, `Transaction id ${id} not exists`)
  } catch (error) {
    return helper(res, 400, false, 'Bad Request')
  }
}

exports.orderHistory = async (req, res) => {
  try {
    const { idUsers } = req.params
    const results = await transactionModels.getUserTransactionByIdUser(idUsers)
    if (results.length > 0) {
      return helper(res, 200, true, 'Details of Order History Transaction', results)
    }
    return helper(res, 404, false, `Transaction idUser ${idUsers} not exists`)
  } catch (error) {
    console.log(error);
    return helper(res, 400, false, 'Bad Request')
  }
}