const Joi = require('joi')
module.exports = {
    validationMovie: (movie) => {
        const schema = Joi.object({
            movieName: Joi.string().min(3).required(),
            releaseDate: Joi.required(),
            directedBy: Joi.string().min(3).required(),
            duration: Joi.required(),
            casts: Joi.string().min(3).required(),
            synopsis: Joi.exist(),
            idGenre: Joi.required()
        })
        return schema.validate(movie)
    },
    validationGenre: (genre) => {
        const schema = Joi.object({
            name: Joi.string().min(3).required()
        })
        return schema.validate(genre)
    }
}