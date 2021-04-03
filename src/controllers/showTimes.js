const showtimeModel = require('../models/showTimes')
const movieModel = require('../models/movies')
const helper = require('../helpers/helper')
const moment = require('moment')


exports.detailShowtime = async (req, res) => {
    try {
        const { id } = req.params
        const results = await showtimeModel.getShowtimesById(id)

        if (results.length > 0) {
            return helper(res, 200, true, 'Details of Showtime', results)
        }
        return helper(res, 404, false, `Showtime id ${id} not exists`)
    } catch (error) {
        console.log(error);
        return helper(res, 400, false, 'Bad Request')
    }
}

exports.listShowtimeByMovie = async (req, res) => {
    try {
        const { id } = req.params
        const results = await showtimeModel.getShowtimeByMovie(Number(id))
        if (results.length > 0) {
            const mapResults = results.map(item => moment(item.showtimeDate).format('YYYY-MM-DD'))
            const finalResults = [...new Set(mapResults)]
            return helper(res, 200, true, 'List of Showtime', finalResults)
        }
        return helper(res, 404, false, 'Showtime Not Found')
    } catch (error) {
        return helper(res, 400, false, 'Bad Request')
    }
}

exports.listCinemaShowtime = async (req, res) => {
    try {
        const { date, search, idMovie } = req.body
        const resultSearch = await showtimeModel.getLocationCinema(search, date, idMovie)
        if (resultSearch.length > 0) {
            // console.log(resultSearch)
            const mapShowtime = resultSearch.map(item => item.idShowtime)
            const mapIdCinema = resultSearch.map(item => item.idCinemas)
            const cinema = await showtimeModel.getCinema([...new Set(mapIdCinema)])
            const showtime = await showtimeModel.getShowtime(mapShowtime)
            // console.log(showtime)
            const hash = Object.create(null)
            // console.log(hash);
            const result = cinema.map(((hash) => (cinema) => (hash[cinema.id] = { id: cinema.idCinemas, name: cinema.name, image: cinema.image, location: cinema.location, address: cinema.adress, price: cinema.price, showtime: [] }))(hash))
            showtime.forEach((hash => showtime => hash[showtime.idCinema].showtime.push({ id: showtime.id, name: showtime.showtime }))(hash))

            return helper(res, 200, true, 'List of Cinema Showtime', result)
        }
        return helper(res, 404, false, `Location ${search}, ShowtimeDate ${date}, and idMovie ${idMovie} not exists`)
    } catch (error) {
        console.log(error);
        return helper(res, 400, false, 'Bad Request')
    }
}

exports.createShowtime = async (req, res) => {
    try {
        const data = req.body
        const selectedShowtime = data.showtime
        const selectedCinema = data.idCinemas
        const showtimeData = {
            idMovie: data.idMovie,
            showtimeDate: data.showtimeDate
        }
        if (typeof selectedCinema === 'object' && typeof selectedShowtime === 'object') {
            await showtimeModel.createCinemaShowtimes(selectedCinema, showtimeData.idMovie, selectedShowtime, showtimeData.showtimeDate)
        }
        if (typeof selectedCinema === 'object' && typeof selectedShowtime === 'string') {
            await showtimeModel.createCinemaShowtimes(selectedCinema, showtimeData.idMovie, [selectedShowtime], showtimeData.showtimeDate)
        }
        if (typeof selectedCinema === 'string' && typeof selectedShowtime === 'object') {
            await showtimeModel.createCinemaShowtimes([selectedCinema], showtimeData.idMovie, selectedShowtime, showtimeData.showtimeDate)
        }
        if (typeof selectedCinema === 'string' && typeof selectedShowtime === 'string') {
            await showtimeModel.createCinemaShowtimes([selectedCinema], showtimeData.idMovie, [selectedShowtime], showtimeData.showtimeDate)
        }
        await movieModel.updateMovie(showtimeData.idMovie, { status: 'nowShowing' })
        const finalResult = await showtimeModel.getShowtimeWithCinemaAndMovie(showtimeData.idMovie)
        // console.log(finalResult);
        if (finalResult.length > 0) {
            return helper(res, 200, true, 'Create data success', {
                id: finalResult[0].id,
                movie: finalResult[0].movie,
                cinema: finalResult.map(item => item.cinema),
                showtimeDate: finalResult[0].showtimeDate,
                showtime: finalResult.map(item => item.showtime)
            })
        }
        return helper(res, 400, false, 'Failed to create showtime')
    } catch (error) {
        return helper(res, 400, false, 'Bad Request')
    }
}

exports.updateShowtime = async (req, res) => {
    try {
        const { id } = req.params
        const data = req.body
        const selectedShowtime = data.showtime
        const showtimeData = {
            idCinemas: data.idCinemas,
            idMovie: data.idMovie,
            showtimeDate: data.showtimeDate
        }
        const initialResult = await showtimeModel.getShowtimeWithCinemaAndMovie(id)
        if (initialResult.length > 0) {
            const results = await showtimeModel.getCinemaShowtimeById(id)
            const idShowtime = results.map((item) => item.id)
            if (typeof selectedShowtime === 'object') {
                if (selectedShowtime.length === results.length) {
                    for (let i = 0; i < idShowtime.length; i++) {
                        await showtimeModel.updateCinemaShowtime(idShowtime[i], selectedShowtime[i])
                    }
                    // console.log('test')
                    await showtimeModel.updateShowtime(id, showtimeData)
                    return helper(res, 200, true, 'Updated successfully', { ...initialResult[0], ...data })
                } else if (selectedShowtime.length > results.length) {
                    for (let i = 0; i < idShowtime.length; i++) {
                        await showtimeModel.updateCinemaShowtime(idShowtime[i], selectedShowtime[i])
                    }
                    await showtimeModel.createCinemaShowtimes(showtimeData.idCinema, id, selectedShowtime.slice(results.length, selectedShowtime.length), showtimeData.showtimeDate)
                    await showtimeModel.updateShowtime(id, showtimeData)
                    return helper(res, 200, true, 'Updated successfully', { ...initialResult[0], ...data })
                } else if (selectedShowtime.length < results.length) {
                    for (let i = 0; i < selectedShowtime.length; i++) {
                        await showtimeModel.updateCinemaShowtime(idShowtime[i], selectedShowtime[i])
                    }
                    await showtimeModel.deleteCinemaShowtimeById(idShowtime.slice(selectedShowtime.length))
                    await showtimeModel.updateShowtime(id, showtimeData)
                    return helper(res, 200, true, 'Updated successfully', { ...initialResult[0], ...data })
                }
            }
            if (typeof selectedShowtime === 'string') {
                await showtimeModel.updateCinemaShowtime(idShowtime[0], selectedShowtime)
                await showtimeModel.deleteCinemaShowtimeById(idShowtime.slice([selectedShowtime].length))
                await showtimeModel.updateShowtime(id, showtimeData)
                return helper(res, 200, true, 'Updated successfully', { ...initialResult[0], ...data })
            }
        } else {
            return helper(res, 400, false, 'Failed to update showtime')
        }
    } catch (error) {
        return helper(res, 400, false, 'Bad Request')
    }
}



exports.deleteShowtime = async (req, res) => {
    try {
        const { id } = req.params
        const initialResult = await showtimeModel.getShowtimesById(id)
        if (initialResult.length > 0) {
            const results = await showtimeModel.deleteShowtimeById(id)
            if (results) {
                return helper(res, 200, true, `Showtime id ${id} deleted successfully`, initialResult)
            }
        }
        return helper(res, 400, false, `Failed to delete showtime id ${id}`)
    } catch (error) {
        return helper(res, 400, false, 'Bad Request')
    }
}