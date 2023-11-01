import express from 'express'
import {
  createRatings,
  deleteRatings,
  getRatings,
  getallRatings,
  totalRatingsCount,
  getTopStarRatings,
} from '../controller/ratingsController.js'

const router = express.Router()

router.post('/', createRatings)
router.delete('/:id', deleteRatings)
router.get('/totalCount', totalRatingsCount)
router.get('/topStar', getTopStarRatings)
router.get('/:email', getRatings)
router.get('/', getallRatings)

export default router
