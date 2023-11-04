import multer from 'multer'
import sharp from 'sharp'
import path from 'path'
import fs from 'fs'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, '../public/images'))
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9)
    cb(null, uniqueSuffix + '-' + file.originalname)
  },
})

const multerFilter = (req, file, cb) => {
  if (file.mimetype.startsWith('image')) {
    cb(null, true)
  } else {
    cb({ message: 'Unsupported file format' }, false)
  }
}

export const uploadPhoto = multer({
  storage: storage,
  fileFilter: multerFilter,
  limits: { fileSize: 10000000 },
})

export const ImgResize = async (req, res, next) => {
  if (!req.files) return next()
  await Promise.all(
    req.files.map(async (file) => {
      const processedFilePath = `public/images/processed_${file.filename}`
      console.log(processedFilePath)
      await sharp(file.path)
        .resize(300, 300)
        .toFormat('jpeg')
        .jpeg({ quality: 90 })
        .toFile(processedFilePath)
      fs.unlinkSync(path.join(file.path, '../../../', processedFilePath))
      console.log(path.join(file.path, '../../../', processedFilePath))
    })
  )
  next()
}
