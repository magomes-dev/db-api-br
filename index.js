require('rootpath')();
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const routes = require( 'routes' );
const jwt = require('middleware/jwt');
const errorHandler = require('middleware/error-handler');
var db = require('database/models');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Usa autenticação Jwt
app.use(jwt());

// Pass app to routes
routes( app );

// global error handler
app.use(errorHandler);


app.listen(3000, ()=>{
    //console.log(process.env.NODE_ENV);
    //db.sequelize.sync();
});