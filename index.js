const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const routes = require( './routes' );

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// api routes
// app.get('/', (req, res) => {
//     res.json({"db-api-br": "API Dragon Ball em construção"});
// });

// app.use('/planets', require('./app/controllers/planet.controller'));

// Pass app to routes
routes( app );

app.listen(3000);