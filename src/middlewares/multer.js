const multer = require('multer')

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/')
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname)
  }
})

const upload = multer({
  storage: storage,
  limits: {
    // fields: 7,
    // fieldNameSize: 50, // TODO: Check if this size is enough
    // fieldSize: 2000, //TODO: Check if this size is enough
    // TODO: Change this line after compression
    fileSize: 5 * 1000 * 1000 // 4.76837158203125 MB for a 1080x1080 JPG 90
  },
  fileFilter: function (req, file, cb) {
    checkFileType(file, cb)
  }
})

function checkFileType (file, cb) {
  // Allowed ext
  const filetypes = /jpeg|jpg|png|gif/
  // Check ext
  const extname = filetypes.test(file.originalname.toLowerCase())
  // Check mime
  const mimetype = filetypes.test(file.mimetype)

  if (mimetype && extname) {
    return cb(null, true)
  } else {
    cb(null, false)
    return cb(new Error('Only .png, .jpg and .jpeg format allowed!'))
  }
}

// const upload = multer({ storage: storage })

module.exports = {
  uploadMulter: upload
}
