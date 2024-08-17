const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'dist')));
app.use((req, res, next) => {
    res.append('Access-Control-Allow-Origin', ['*']);
    res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.append('Access-Control-Allow-Headers', 'Content-Type');
    next();
})
app.use(express.json())
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});
// Создание GET маршрута
app.get('/express_backend', (req, res) => { //Строка 9
    res.json({ data: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
    // res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' }); //Строка 10
});
const todoItems = require('./todo-items.json');
app.get('/api/todo-items', (req, res) => {
    res.json({ data: todoItems });
})

// app.listen(3000);
app.listen(3000, () => {
    console.log(`Server running on port ${3000}`);
});