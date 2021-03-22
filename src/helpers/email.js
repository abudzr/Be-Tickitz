const nodemailer = require("nodemailer");

let transporter = nodemailer.createTransport({
    // host: 'smtp.gmail.com',
    service: "Gmail",
    auth: {
        user: process.env.EMAIL_USER, // generated ethereal user
        pass: process.env.EMAIL_PASSWORD, // generated ethereal password
    },
});
const sendEmail = (toEmail) => {
    return new Promise(async (resolve, reject) => {
        try {
            let info = await transporter.sendMail({
                from: 'akunjokiancoc@gmail.com', // sender address
                to: toEmail, // list of receivers
                subject: "Tickitz: Password Reset", // Subject line
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
                            margin-right: auto;
                            margin-left: auto;
                        }
                        </style>
                        </head>
                        <body>
                            <div class="container">
                            <img src="https://bookingtickitz.netlify.app/assets/img/logo2.png">
                            <h1>Forgot your password?</h1>
                            <h2>Create a new Account password and get back to the action!</h2>

                            <p>Hi there,<p>
                            
                            <p>We've received a password reset request for user ${toEmail}. If you made this request, please click here to continue to reset your password. This link will expire in one hour.</p>
                            
                            <p>If you can't click the link above, you can copy/paste the following link into your browser: https://bookingtickitz.com/passwordReset?</p>
                            
                            <p>If you did not request a password reset, simply take no action, and this request will expire.</p>
                            
                            <p>If you have any other problems, or need additional support, please don't hesitate to contact us by email at support@bookingtickitz.com</p>
                            
                            <p>See you out on the Booking Tickitz!</p>
                            
                            <p>Copyright © 2021 Booking Tickitz Film, All rights reserved</p

                            </div>
                        </body>
                        </html>`,
            });
            resolve(info)
        } catch (error) {
            reject(error)
        }
    })
}

module.exports = {
    sendEmail
}