const helper = require('../helpers/helper')
const jwt = require('jsonwebtoken')

exports.verifyAccess = (req, res, next) => {
    const authorization = req.headers.authorization
    if (!authorization) {
        return helper(res, 401, false, 'Server, Need Token!', null)
    }

    let token = authorization.split(" ")
    token = token[1]

    jwt.verify(token, process.env.SECRET_KEY, function (err, decoded) {
        if (err) {
            if (err.name === 'JsonWebTokenError') {
                return helper(res, 401, false, 'jwt signature is required', null)
            } else if (err.name === 'TokenExpiredError') {
                return helper(res, 401, false, 'jwt expired', null)
            } else {
                return helper(res, 401, false, 'jwt not active', null)
            }
        }
        console.log(decoded);
        req.email = decoded.email
        next()
    });
}