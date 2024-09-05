// const nodemailer = require('nodemailer');
//
// let testEmailAccount = await nodemailer.createTestAccount();
//
// let transporter = nodemailer.createTransport({
//     host: 'smtp.ethereal.email',
//     port: 587,
//     secure: false,
//     auth: {
//         user: testEmailAccount.user,
//         pass: testEmailAccount.pass,
//     },
// });
//
// let result = await transporter.sendMail({
//     from: '"Node js" <nodejs@example.com>',
//     to: 'user@example.com, user@example.com',
//     subject: 'Message from Node js',
//     text: 'This message was sent from Node js server.',
//     html:
//         'This <i>message</i> was sent fromrong>Node js</strong> server.',
// });
//
// console.log(result);

const nodemailer = require("nodemailer");

const sendEmail = async (options) => {
    console.log('options', options)
    // console.log('options:', options);
    // const transporter = sendEmails.createTransport({
    //     host: process.env.SMPT_HOST,
    //     port: process.env.SMPT_PORT,
    //     service: process.env.SMPT_SERVICE,
    //     auth: {
    //         user: process.env.SMPT_MAIL,
    //         pass: process.env.SMPT_APP_PASS,
    //     },
    // });
    //
    // const mailOptions = {
    //     from: process.env.SMPT_MAIL,
    //     to: options.to,
    //     subject: options.subject,
    //     html: options.message,
    // };
    //
    // await transporter.sendMail(mailOptions);
    try {
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'umihaleva93@gmail.com',
                pass: 'fvdd txaf nfhd ukiw'
            }
        });

        const mailOptions = {
            from: 'umihaleva93@gmail.com',
            to: options.email,
            subject: 'Hello',
            html: `<p><b>${options.text}</b> ip адрес: ${options.ip}</p>`,
            // text: 'This is the body of the email.'
        };

        let info = await transporter.sendMail(mailOptions);
        console.log('info', info);
        // console.log('Email sent:', info.messageId);
    } catch (error) {
        console.error('Error occurred:', error);
    }

};

module.exports = sendEmail;
