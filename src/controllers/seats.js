const seatModel = require('../models/seats')
const helpers = require('../helpers/helper')

exports.listSeatSoldByShowtime = async (req, res) => {
    try {
        const { id } = req.params
        const results = await seatModel.getSeatByIdShowtime(id)
        // console.log(results[0]);
        // const data = results.map((item) => {
        //     return { name: item.name, }
        // })
        const data = results.map(a => a.name);
        if (results.length > 0) {
            return helpers(res, 200, true, `List of Seat Sold by idShowtime ${id}`, data)
        }
        return helpers(res, 404, false, `Showtime id ${id} not exists`)
    } catch (error) {
        return helpers(res, 400, false, 'Bad Request')
    }
}