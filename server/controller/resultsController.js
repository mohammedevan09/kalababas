import asyncHandler from 'express-async-handler'
import Results from '../model/resultsModel.js'
import {
  cloudinaryDeleteImg,
  cloudinaryUploadImg,
} from '../middleware/cloudinary.js'
import fs from 'fs'

export const createResults = asyncHandler(async (req, res) => {
  try {
    const newResults = await Results.create(req.body)
    res.status(200).json(newResults)
  } catch (error) {
    throw new Error(error)
  }
})

export const updateResults = asyncHandler(async (req, res) => {
  const { id } = req.params
  try {
    const updatedResults = await Results.findByIdAndUpdate(id, req.body, {
      new: true,
    })
    res.status(200).json(updatedResults)
  } catch (error) {
    throw new Error(error)
  }
})

export const deleteResults = asyncHandler(async (req, res) => {
  const { id } = req.params
  try {
    const deletedResults = await Results.findByIdAndDelete(id)
    await cloudinaryDeleteImg(
      deletedResults?.image?.public_id[0]?.length < 3
        ? deletedResults?.image?.public_id
        : deletedResults?.image?.public_id[0],
      'images'
    )

    res.status(200).json(deletedResults)
  } catch (error) {
    throw new Error(error)
  }
})

export const getResults = asyncHandler(async (req, res) => {
  const { id } = req.params
  try {
    const getResults = await Results.findById(id)
    res.status(200).json(getResults)
  } catch (error) {
    throw new Error(error)
  }
})

export const getallResults = asyncHandler(async (req, res) => {
  try {
    const page = req.query.page
    const limit = req.query.limit
    const skip = (page - 1) * limit

    const getallResults = await Results.find()
      .skip(skip)
      .limit(limit)
      .sort('-createdAt')
    res.status(200).json(getallResults)
  } catch (error) {
    throw new Error(error)
  }
})

export const totalResultsCount = asyncHandler(async (req, res) => {
  try {
    const totalData = await Results.find().countDocuments()

    res.status(200).json(totalData)
  } catch (error) {
    throw new Error(error)
  }
})

export const uploadImages = asyncHandler(async (req, res) => {
  const { id } = req.params

  try {
    const uploaded = await cloudinaryUploadImg(req.files[0]?.path)

    const findResults = await Results.findByIdAndUpdate(
      id,
      {
        image: uploaded,
      },
      {
        new: true,
      }
    )
    fs.unlinkSync(req.files[0]?.path)
    return res.status(200).json(findResults)
  } catch (error) {
    throw new Error(error)
  }
})

export const deleteImages = asyncHandler(async (req, res) => {
  const { id } = req.params
  try {
    await cloudinaryDeleteImg(id, 'images')
    res.json({ message: 'Deleted' })
  } catch (error) {
    throw new Error(error)
  }
})
