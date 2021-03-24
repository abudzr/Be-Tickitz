const helper = require('../helpers/helper')

exports.onlyAdmin = (req, res, next) => {
  // console.log(req.data.role);
  if (req.data.role == 1) {
    req.data
    next()
  } else {
    return helper(res, 401, false, 'only admin can access this page!', null)
  }
}
