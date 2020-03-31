const express = require( 'express' );
let router = express.Router();
const controller = require( '../../controllers/planet.controller' )



router.get( '/', controller.getAll);

module.exports = router;