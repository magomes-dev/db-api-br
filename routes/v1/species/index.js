const express = require( 'express' );
let router = express.Router();
const controller = require( '../../../controllers/species.controller' )
const rateLimit = require('../../../_helpers/rate-limit')


router.get('/', rateLimit.queryLimiter, controller.getAll);

router.post('/', rateLimit.PostPutDeleteLimiter, controller.createSpecies);

router.delete('/:id', rateLimit.PostPutDeleteLimiter, controller.deleteSpecies)

router.put('/:id', rateLimit.PostPutDeleteLimiter, controller.updateSpecies)

router.get('/:id', rateLimit.queryLimiter, controller.getById)

module.exports = router;