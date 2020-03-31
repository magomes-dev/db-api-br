const express = require( 'express' );

let router = express.Router();

router.get('/', (req, res) => {
    res.json({"db-api-br": "API Dragon Ball em construção"});
});

module.exports = router;

const planets = require( "./planets" );

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

    app.use('/planets', planets)

};

module.exports = routes;