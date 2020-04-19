const express = require( 'express' );
let router = express.Router();
const controller = require( 'controllers/serie.controller' )
const rateLimit = require('middleware/rate-limit')
const {series} = require('routes/schemas/schemas'); 
const middleware = require('middleware/validate-schema-request');



router.get('/', rateLimit.queryLimiter, controller.getAll);

router.post('/',middleware(series.create), rateLimit.PostPutDeleteLimiter, controller.createSerie);

router.delete('/:id', rateLimit.PostPutDeleteLimiter, controller.deleteSerie)

router.put('/:id',middleware(series.update), rateLimit.PostPutDeleteLimiter, controller.updateSerie)

router.get('/:id', rateLimit.queryLimiter, controller.getById)

module.exports = router;