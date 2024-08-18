const express = require('express');
const path = require('path');
const app = express();
const sendEmailHandler = require("./src/utils/sendEmails.js");
const router = express.Router();

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
app.post('/api/express_backend/', (req, res) => { //Строка 9
    // sendEmailHandler("mail");
    if (!req.body) return res.sendStatus(400);
    console.log('reg111', req.body.data, req.body)
    // console.log('reg', req.originalUrl);
    res.json({ data: todoItems });
    // res.send(`111`);

});
const todoItems = require('./todo-items.json');
app.get('/api/todo-items/', (req, res) => {
   res.json({ data: todoItems });
})
app.listen(3000, () => {
    console.log(`Server running on port ${3000}`);
});
module.exports = router;