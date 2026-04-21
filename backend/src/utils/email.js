const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

module.exports = (to, token) => {
    const url = `http://localhost:5000/api/auth/verify/${token}`;

    return transporter.sendMail({
    to,
    subject: "Verify Email",
    html: `<a href="${url}">Verify your account</a>`
    });
};