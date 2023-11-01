import express from 'express'
import {
  createResults,
  updateResults,
  deleteResults,
  getResults,
  getallResults,
  uploadImages,
  totalResultsCount,
} from '../controller/resultsController.js'
import { ImgResize, uploadPhoto } from '../middleware/uploadImages.js'

const router = express.Router()

router.get('/totalCount', totalResultsCount)
router.post('/', createResults)
router.put('/:id', updateResults)
router.put(
  '/upload/:id',
  uploadPhoto.array('images', 10),
  ImgResize,
  uploadImages
)
router.delete('/:id', deleteResults)
router.get('/:id', getResults)
router.get('/', getallResults)

export default router
