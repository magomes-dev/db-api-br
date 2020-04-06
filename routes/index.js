const express = require( 'express' );

let router = express.Router();

router.get('/', (req, res) => {
    res.json({"db-api-br": "API Dragon Ball em construção"});
});

module.exports = router;

const planets = require('./v1/planets');
const series  = require('./v1/series');
const species = require('./v1/species');
const characters = require('./v1/characters');
const users = require('./v1/users');

const routes = app => {
    app.use( ( req, res, next ) => {

        res.setHeader( "Access-Control-Allow-Origin", "*" );

        res.setHeader(
            "Access-Control-Allow-Methods",
            "GET, POST, OPTIONS, PUT, PATCH, DELETE"
        );

        res.setHeader(
            "Access-Control-Allow-Headers",
            "X-Requested-With, content-type, x-access-token, authorization"
        );

        res.setHeader( "Access-Control-Allow-Credentials", true );

        res.removeHeader( "X-Powered-By" );

        next();
    } );

    app.get('/', (req, res) => {
        res.json({"db-api-br": "API Dragon Ball em construção"});
    });

    app.use('/v1/planets', planets)
    app.use('/v1/series', series)
    app.use('/v1/species', species)
    app.use('/v1/characters', characters)
    app.use('/v1/users', users)

};

module.exports = routes;