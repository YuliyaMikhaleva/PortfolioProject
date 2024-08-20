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
        } else {
            // Ошибка проверки reCAPTCHA
            res.status(400).send('reCAPTCHA verification failed');
        }
    } catch (error) {
        res.status(500).send('Internal Server Error');
    }
    // console.log('params', req.body)
    // if (req.body.data.email && req.body.data.text){
    //     console.log('отправка')
    //     sendEmailHandler(req.body.data);
    // }

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
