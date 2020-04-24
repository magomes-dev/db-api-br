/* eslint-disable import/no-unresolved */
require('rootpath')();
const express = require('express');

require('dotenv').config();

const app = express();
const bodyParser = require('body-parser');
const routes = require('routes');
const jwt = require('middleware/jwt');
const errorHandler = require('middleware/error');

const PORT = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Usa autenticação Jwt
app.use(jwt());

// Pass app to routes
routes(app);

// global error handler
app.use(errorHandler);

app.listen(PORT, () => {
});
