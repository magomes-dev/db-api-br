const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const routes = require( './routes' );
const jwt = require('./_helpers/jwt');
const errorHandler = require('./_helpers/error-handler');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Usa autenticação Jwt
app.use(jwt());

// Pass app to routes
routes( app );

// global error handler
app.use(errorHandler);


app.listen(3000);