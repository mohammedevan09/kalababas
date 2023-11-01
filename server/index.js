import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import morgan from 'morgan'
import { errorHandler, notFound } from './middleware/errorHandler.js'
import authRouter from './router/authRouter.js'
import sendEmailRouter from './router/sendEmailRouter.js'
import ratingsRouter from './router/ratingsRouter.js'
import resultsRouter from './router/resultsRouter.js'
dotenv.config()

const app = express()
const port = process.env.PORT

//connection
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log('Connected')
  })
  .catch((err) => {
    console.log('Disconnected', err)
  })

app.use(cors())
app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())

app.get('/', (req, res) => {
  res.send('Hello World')
})

app.use('/api/user', authRouter)
app.use('/api/ratings', ratingsRouter)
app.use('/api/results', resultsRouter)
app.use('/api/sendEmail', sendEmailRouter)

app.use(notFound)
app.use(errorHandler)

app.listen(port, () => {
  console.log('server listening at localhost:' + port)
})
