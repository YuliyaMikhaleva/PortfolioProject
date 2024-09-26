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
    try {
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'umihaleva93@gmail.com',
                pass: 'fvdd txaf nfhd ukiw'
            }
        });

        const mailOptions = {
            from: options.email,
            to: 'umihaleva93@mail.ru',
            subject: 'Форма с сайта',
            html: `
            <div>
                <p>Добрый день! Вам написали письмо с адреса: ${options.email}</p>
                <p>ip адрес: ${options.ip}</p>
                <p><b>Текст письма:</b><p>
                <b>${options.text}</b>                 
            </div>`,
        };

        const toUserMailOptions = {
            from: options.email,
            to: 'umihaleva93@mail.ru',
            subject: 'Форма с сайта',
            html: `
            <div>
                <p>Добрый день! Вы написали мне письмо с моего сайта-портфолио: я обязательно прочитаю и отпишусь в ближайшее время</p>
                <p>С уважением, Михалева Юлия.</p>             
            </div>`,
        };

        let info = await transporter.sendMail(!options.toUser ? mailOptions : toUserMailOptions) ;
        console.log('info', info);
        // console.log('Email sent:', info.messageId);
    } catch (error) {
        console.error('Error occurred:', error);
    }

};

module.exports = sendEmail;
