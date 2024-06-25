// 1. import nodemailer
const nodemailer = require('nodemailer');

// 2. Configure email and send it

async function sendMail() {
    // 1. create an email transporter
    // SMTP (Simple Mail Tranfer Protocol)
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'adityaverma9524@gmail.com',
            pass: 'ncsr dhtm hovr ouim',
        },
    });

    // 2/ Configure Email Content
    const mailOptions = {
        from: 'adityaverma9524@gmail.com',
        to: 'anitaverma7979@gmail.com',
        subject: 'Welcome to NodeJS App',
        text: 'This is an email using nodemailer in node.js',
    };

    // 3. Send Mail
    try {
        const result = await transporter.sendMail(mailOptions);
        console.log('Mail Sent.');
    }
    catch(err) {
        console.log('Sending email failed with error: ' + err);
    }
}

sendMail();