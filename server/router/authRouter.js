import express from 'express'
import dotenv from 'dotenv'
import {
  createUser,
  handleRefreshToken,
  loginAdmin,
  loginUser,
} from '../controller/authController.js'
dotenv.config()

const router = express.Router()

router.post('/register', createUser)
router.post('/login', loginUser)
router.post('/admin-login', loginAdmin)
router.get('/refresh', handleRefreshToken)

export default router
