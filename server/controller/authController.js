import asyncHandler from 'express-async-handler'
import generateToken from '../config/jwtToken.js'
import generateRefreshToken from '../config/refreshToken.js'
import User from '../model/userModel.js'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config()

export const createUser = asyncHandler(async (req, res) => {
  const email = req.body.email
  const findUser = await User.findOne({ email })

  if (!findUser) {
    const newUser = await User.create(req.body)
    const refreshToken = generateRefreshToken(newUser?._id)

    const registeredUser = await User.findByIdAndUpdate(
      newUser?.id,
      {
        refreshToken: refreshToken,
      },
      { new: true }
    )

    res.cookie('refreshToken', refreshToken, {
      httpOnly: true,
      maxAge: 72 * 60 * 60 * 1000,
    })
    return res
      .status(200)
      .json({ ...registeredUser._doc, token: generateToken(newUser?._id) })
  } else {
    return res.status(200).json(findUser)
  }
})

// Admin login
export const loginAdmin = asyncHandler(async (req, res) => {
  const { email, password } = req.body
  // check if user exists or not
  const findAdmin = await User.findOne({ email })
  if (findAdmin.role !== 'admin') throw new Error('Not Authorized')
  if (findAdmin && (await findAdmin.isPasswordMatched(password))) {
    const refreshToken = generateRefreshToken(findAdmin?._id)
    await User.findByIdAndUpdate(
      findAdmin.id,
      {
        refreshToken: refreshToken,
      },
      { new: true }
    )
    res.cookie('refreshToken', refreshToken, {
      httpOnly: true,
      maxAge: 72 * 60 * 60 * 1000,
    })

    return res.status(200).json({
      _id: findAdmin?._id,
      fullName: findAdmin?.fullName,
      email: findAdmin?.email,
      role: findAdmin?.role,
      token: generateToken(findAdmin?._id),
      refreshToken,
    })
  } else {
    throw new Error('Invalid Credentials')
  }
})

export const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body
  // check if user exists or not
  const findUser = await User.findOne({ email })
  if (findUser && (await findUser.isPasswordMatched(password))) {
    const refreshToken = generateRefreshToken(findUser?._id)
    await User.findByIdAndUpdate(
      findUser.id,
      {
        refreshToken: refreshToken,
      },
      { new: true }
    )
    res.cookie('refreshToken', refreshToken, {
      httpOnly: true,
      maxAge: 72 * 60 * 60 * 1000,
    })

    return res.status(200).json({
      _id: findUser?._id,
      fullName: findUser?.fullName,
      email: findUser?.email,
      role: findUser?.role,
      token: generateToken(findUser?._id),
      refreshToken,
    })
  } else {
    res.status(401)
    throw new Error('Invalid Credentials')
  }
})

export const handleRefreshToken = asyncHandler(async (req, res) => {
  const { refreshToken } = req.query
  // console.log(refreshToken)

  const user = await User.findOne({ refreshToken })
  if (!user) throw new Error('No refresh token present in db or not matched')
  jwt.verify(refreshToken, process.env.JWT_SECRET, (err, decoded) => {
    if (err || user?.id !== decoded?.id) {
      throw new Error('There is something wrong with refresh token')
    }
    const accessToken = generateToken(user?._id)
    res.json({ accessToken })
  })
})
