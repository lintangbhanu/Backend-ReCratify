const nodemailer = require("nodemailer");
require("dotenv").config();

async function sendRegisterEmail(email) {
    try {
        // Konfigurasi transporter Nodemailer
        let transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 587,
            secure: false,
            auth: {
                user: process.env.APP_USER,
                pass: process.env.APP_PASS
            },
        });

        // Opsi email
        let mailOptions = {
            from: process.env.APP_USER,
            to: email,
            subject: 'Thank You for subscribing to Re-Cratify',
            text: `We are glad to have you here and want you to make the most out of your experience with Re-Cratify.`
        };

        // Kirim email
        await transporter.sendMail(mailOptions);

        // Log tindakan untuk tujuan debugging
        console.log(`This Email for user who has subscribe ${email}`);
    } catch (error) {
        console.error(`Error in sendRegisterEmail: ${error.message}`);
        throw error;
    }
}


async function sendResetEmail(email, resetCode) {
    try {
        // Konfigurasi transporter Nodemailer
        let transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 587,
            secure: false,
            auth: {
                user: process.env.APP_USER,
                pass: process.env.APP_PASS
            },
        });

        // Opsi email
        let mailOptions = {
            from: process.env.APP_USER,
            to: email,
            subject: 'Kode Reset Password',
            text: `Kode reset Anda adalah: ${resetCode}. Kode ini berlaku selama 1 jam.`
        };

        // Kirim email
        await transporter.sendMail(mailOptions);

        // Log tindakan untuk tujuan debugging
        console.log(`Reset code generated for ${email}: ${resetCode}`);
    } catch (error) {
        console.error(`Error in sendResetEmail: ${error.message}`);
        throw error;
    }
}

module.exports = { sendRegisterEmail,sendResetEmail };
