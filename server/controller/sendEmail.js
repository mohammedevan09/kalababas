import expressAsyncHandler from 'express-async-handler'
import dotenv from 'dotenv'
import nodemailer from 'nodemailer'

dotenv.config()

let transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: false,
  auth: {
    user: process.env.SMTP_MAIL,
    pass: process.env.SMTP_PASSWORD,
  },
})

const sendEmail = expressAsyncHandler(async (req, res) => {
  const { email, subject, message, number } = req.body
  // console.log(email, subject, message)

  var mailOptions = {
    from: email,
    to: process.env.SMTP_MAIL,
    subject: subject,
    text: message + ' || ' + email + ' || ' + number,
  }

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      return res.send(500).json(error)
    } else {
      return res.send(200).json('Email sent successfully!')
    }
  })
})

export default sendEmail
