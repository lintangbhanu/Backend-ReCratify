const nodemailer = require("nodemailer");
require("dotenv").config();

async function sendRegisterEmail(email) {
    try {
        let transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 587,
            secure: false,
            auth: {
                user: process.env.APP_USER,
                pass: "ajod wlqg eqls arim"
            },
        });

        let mailOptions = {
            from: process.env.APP_USER,
            to: email,
            subject: 'Thank You for subscribing to Re-Cratify',
            text: `We are glad to have you here and want you to make the most out of your experience with Re-Cratify.`
        };

        await transporter.sendMail(mailOptions);

        console.log(`This Email for user who has subscribe ${email}`);
    } catch (error) {
        console.error(`Error in sendRegisterEmail: ${error.message}`);
        throw error;
    }
}

async function sendResetEmail(email, resetCode) {
    try {
        let transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 587,
            secure: false,
            auth: {
                user: process.env.APP_USER,
                pass: "ajod wlqg eqls arim"
            },
        });

        let mailOptions = {
            from: process.env.APP_USER,
            to: email,
            subject: 'Kode Reset Password',
            text: `Your reset code is: ${resetCode}. This code is valid for 1 hour.`
        };

        await transporter.sendMail(mailOptions);

        console.log(`Reset code generated for ${email}: ${resetCode}`);
    } catch (error) {
        console.error(`Error in sendResetEmail: ${error.message}`);
        throw error;
    }
}

module.exports = { sendRegisterEmail,sendResetEmail };
