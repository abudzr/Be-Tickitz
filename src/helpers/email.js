const nodemailer = require('nodemailer')
const smtpTransport = require("nodemailer-smtp-transport");
const transporter = nodemailer.createTransport(
  smtpTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    },
  })
)

const activationEmail = (toEmail, token) => {
  return new Promise(async (resolve, reject) => {
    try {
      const info = await transporter.sendMail({
        from: process.env.EMAIL_USER, // sender address
        to: toEmail, // list of receivers
        subject: 'Tickitz Account: Email address verification', // Subject line
        html: `<!DOCTYPE html>
                        <html lang="en">
                        <head>
                        <meta charset="UTF-8">
                        <meta http-equiv="X-UA-Compatible" content="IE=edge">
                        <meta name="viewport" content="width=device-width, initial-scale=1.0">
                        <title>Document</title>
                        <style>

                        </style>
                        </head>
                        <body>
                            <div class="container">
                            // <img class="img" src="https://bookingtickitz.netlify.app/assets/img/logo2.png">
                            <h2>Welcome to the Booking Tickitz account registration: wait, watch, wow! Please confirm!</h2>
                            <p>You have registered a Booking Tickitz account with ${toEmail}. Please click link to continue verification account.</p>
                            <a href="${process.env.URL}/users/auth/activate?token=${token}"> Click Here to Verification</a>
                            <p>If you can't click the link above, you can copy/paste the following link into your browser: ${process.env.URL}/users/auth/activate?token=${token}</p>
                            
                            <p>For security, the link will only be active for 24 hours. after 24 hours, you need to register again.</p>
                            
                            <p>If you have any other problems, or need additional support, please don't hesitate to contact us by email at support@bookingtickitz.com</p>
                            
                            <p>See you out on the Booking Tickitz!</p>
                            
                            <p>Copyright © 2021 Booking Tickitz Film, All rights reserved</p

                            </div>
                        </body>
                        </html>`
      })
      resolve(info)
    } catch (error) {
      reject(error)
    }
  })
}

const resetpass = (toEmail, token) => {
  return new Promise(async (resolve, reject) => {
    try {
      const info = await transporter.sendMail({
        from: process.env.EMAIL_USER, // sender address
        to: toEmail, // list of receivers
        subject: 'Tickitz: Password Reset', // Subject line
        html: `<!DOCTYPE html>
                        <html lang="en">
                        <head>
                        <meta charset="UTF-8">
                        <meta http-equiv="X-UA-Compatible" content="IE=edge">
                        <meta name="viewport" content="width=device-width, initial-scale=1.0">
                        <title>Document</title>
                        <style>
                        .container{
                            border: 5px;
                            
                        }
                        </style>
                        </head>
                        <body>
                            <div class="container">
                            // <img src="https://bookingtickitz.netlify.app/assets/img/logo2.png">
                            <h1>Forgot your password?</h1>
                            <h2>Create a new Account password and get back to the action!</h2>

                            <p>Hi there,<p>
                            
                            <p>We've received a password reset request for user ${toEmail}. If you made this request, please click here to continue to reset your password. This link will expire in one hour.</p>
                            <a href="${process.env.URL_REACT}/new-password/${toEmail}/${token}"> Click Here to Verification</a>
                            <p>If you can't click the link above, you can copy/paste the following link into your browser: ${process.env.URL_REACT}/new-password/${toEmail}/${token}</p>
                            
                            <p>If you did not request a password reset, simply take no action, and this request will expire.</p>
                            
                            <p>If you have any other problems, or need additional support, please don't hesitate to contact us by email at support@bookingtickitz.com</p>
                            
                            <p>See you out on the Booking Tickitz!</p>
                            
                            <p>Copyright © 2021 Booking Tickitz Film, All rights reserved</p

                            </div>
                        </body>
                        </html>`
      })
      resolve(info)
    } catch (error) {
      reject(error)
    }
  })
}

module.exports = {
  resetpass,
  activationEmail
}
