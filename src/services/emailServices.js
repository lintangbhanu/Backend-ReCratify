const nodemailer = require("nodemailer");
require("dotenv").config();

async function sendResetEmail(email, resetCode) {
    try {
        // Konfigurasi transporter Nodemailer
        let transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 587,
            secure: false, // true for 465, false for other ports
            auth: {
                user: process.env.APP_USER, // your email
                pass: process.env.APP_PASS // your password
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

module.exports = { sendResetEmail };
