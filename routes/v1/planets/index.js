const express = require( 'express' );
let router = express.Router();
const controller = require( '../../../controllers/planet.controller' )
const rateLimit = require('../../../_helpers/rate-limit')



router.get('/', rateLimit.queryLimiter, controller.getAll);

router.post('/', rateLimit.PostPutDeleteLimiter, controller.createPlanet);

router.delete('/:id', rateLimit.PostPutDeleteLimiter, controller.deletePlanet)

router.put('/:id', rateLimit.PostPutDeleteLimiter, controller.updatePlanet)

router.get('/:id', rateLimit.queryLimiter, controller.getById)

module.exports = router;