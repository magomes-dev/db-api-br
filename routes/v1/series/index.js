const express = require( 'express' );
let router = express.Router();
const controller = require( '../../../controllers/serie.controller' )
const rateLimit = require('../../../_helpers/rate-limit')



router.get('/', rateLimit.queryLimiter, controller.getAll);

router.post('/', rateLimit.PostPutDeleteLimiter, controller.createSerie);

router.delete('/:id', rateLimit.PostPutDeleteLimiter, controller.deleteSerie)

router.put('/:id', rateLimit.PostPutDeleteLimiter, controller.updateSerie)

router.get('/:id', rateLimit.queryLimiter, controller.getById)

module.exports = router;