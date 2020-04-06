const express = require( 'express' );
let router = express.Router();
const controller = require( '../../../controllers/user.controller' )
const rateLimit = require('../../../_helpers/rate-limit')


router.post('/register', rateLimit.registerLimiter, controller.createUser);

router.post('/authenticate', controller.authenticateUser)


module.exports = router;