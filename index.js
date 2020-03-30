const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// api routes
app.get('/', (req, res) => {
    res.json({"db-api-br": "API Dragon Ball em construção"});
});

app.use('/planets', require('./app/controllers/planet.controller'));

app.listen(3000);