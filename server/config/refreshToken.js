import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config()

const generateRefreshToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '90d' })
}

export default generateRefreshToken
