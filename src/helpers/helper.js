module.exports = (res, code, stat, msg, data, pageInfo) => {
  return res.status(code).json({
    status: stat,
    message: msg,
    data: data,
    pageInfo: pageInfo

  })
}
