const express = require('express');
const path = require('path');
const app = express();
const sendEmailHandler = require("./src/utils/sendEmails.js");
const router = express.Router();
const axios = require('axios');

const verifyRecaptcha = async (token) => {
    const response = await axios.post(`https://www.google.com/recaptcha/api/siteverify`, null, {
        params: {
            secret: "6LeLCyoqAAAAABZV6vAQyhKHcsWAzNbVr7G3CO-Z",
            response: token,
        },
    });
    return response.data;
};
app.set('trust proxy', true)


app.use(express.static(path.join(__dirname, 'dist')));
app.use((req, res, next) => {
    res.append('Access-Control-Allow-Origin', ['*']);
    res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.append('Access-Control-Allow-Headers', 'Content-Type');
    next();
})
app.use(express.json())
app.get('/', function (req, res) {
    // res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});
// Создание GET маршрута
app.post('/api/express_backend/', async (req, res) => { //Строка 9
    // sendEmailHandler("mail");
    console.log('req.ips', req.ips);
    console.log('req.ip', req.ip);
    const ipAddress = req.ip;
    if (!req.body) return res.sendStatus(400);
    // let params = {
    //     secret: '6LeLCyoqAAAAABZV6vAQyhKHcsWAzNbVr7G3CO-Z',
    //     response: req.body.data.gtoken,
    // }
    // let response = fetch(`https://www.google.com/recaptcha/api/siteverify`, {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json;charset=utf-8'
    //     },
    //     body: JSON.stringify(params)
    // });
    // console.log('response', response);
    try {
        const recaptchaResponse = await verifyRecaptcha(req.body.data.gtoken);
        console.log('recaptchaResponse', recaptchaResponse)

        if (recaptchaResponse.success) {
            // Проверка пройдена, обрабатывай запрос
            res.status(200).send('Success');
            // console.log('clientIp', clientIp)
            console.log('req.header', req.header)
            console.log('req.headers', req.headers);
            console.log('req.header(\'x-forwarded-for\')', req.header('x-forwarded-for'))
            console.log('req.connection.remoteAddress', req.connection.remoteAddress)
            console.log('req.socket.remoteAddress', req.socket.remoteAddress)
            console.log('req.headers[\'x-forwarded-for\']', req.headers['x-forwarded-for'])
            console.log('req.headers[\'x-client-ip\']', req.headers['x-client-ip'])
            var ip = req.headers['x-real-ip'] || req.connection.remoteAddress;
            console.log('ip', ip)
            if (req.body.data.email && req.body.data.text){
                console.log('отправка', ipAddress, ipAddress.toString())
                let data = {
                    ...req.body.data,
                    ip: ipAddress
                }
                sendEmailHandler(data);
            }
        } else {
            // Ошибка проверки reCAPTCHA
            res.status(400).send('reCAPTCHA verification failed');
        }
    } catch (error) {
        res.status(500).send('Internal Server Error');
    }


    // console.log('reg', req.originalUrl);
    // res.json({ data: todoItems });
    // res.send(`111`);

});
const todoItems = require('./todo-items.json');
app.get('/api/todo-items/', (req, res) => {
   res.json({ data: todoItems });
})
app.listen(5000, () => {
    console.log(`Server running on port ${5000}`);
});
module.exports = router;
