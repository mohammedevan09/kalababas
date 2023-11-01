import asyncHandler from 'express-async-handler'
import Ratings from '../model/ratingsModel.js'

export const createRatings = asyncHandler(async (req, res) => {
  try {
    const { email, star, comment } = req.body
    const existingRatings = await Ratings.findOne({ email })

    if (existingRatings) {
      existingRatings.star = star
      existingRatings.comment = comment
      const updatedRatings = await existingRatings.save()
      res.status(200).json(updatedRatings)
    } else {
      const newRatings = await Ratings.create(req.body)
      res.status(200).json(newRatings)
    }
  } catch (error) {
    throw new Error(error)
  }
})

export const deleteRatings = asyncHandler(async (req, res) => {
  const { id } = req.params
  try {
    const deletedRatings = await Ratings.findByIdAndDelete(id)

    res.status(200).json(deletedRatings)
  } catch (error) {
    throw new Error(error)
  }
})

export const getRatings = asyncHandler(async (req, res) => {
  const { email } = req.params
  try {
    const getRatings = await Ratings.findOne({ email })
    res.status(200).json(getRatings)
  } catch (error) {
    throw new Error(error)
  }
})

export const getallRatings = asyncHandler(async (req, res) => {
  try {
    const page = req.query.page
    const limit = req.query.limit
    const skip = (page - 1) * limit

    const getallRatings = await Ratings.find()
      .skip(skip)
      .limit(limit)
      .sort('-createdAt')
    res.status(200).json(getallRatings)
  } catch (error) {
    throw new Error(error)
  }
})

export const getTopStarRatings = asyncHandler(async (req, res) => {
  try {
    const ratings = await Ratings.find({
      star: { $gt: 4 },
      $expr: { $gt: [{ $strLenCP: '$comment' }, 80] },
    }).limit(5)
    res.status(200).json(ratings)
  } catch (error) {
    throw new Error(error)
  }
})

export const totalRatingsCount = asyncHandler(async (req, res) => {
  try {
    const totalData = await Ratings.find().countDocuments()

    const ratingStars = await Ratings.aggregate([
      {
        $group: {
          _id: null,
          averageStar: { $avg: '$star' },
        },
      },
    ])

    const averageStar = ratingStars[0].averageStar

    res.status(200).json({ totalData, averageStar })
  } catch (error) {
    throw new Error(error)
  }
})
