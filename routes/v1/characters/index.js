const express = require( 'express' );
let router = express.Router();
const controller = require( '../../../controllers/character.controller' )
const rateLimit = require('../../../_helpers/rate-limit')



router.get('/', rateLimit.queryLimiter, controller.getAll);

router.post('/', rateLimit.PostPutDeleteLimiter, controller.createCharacter);

router.delete('/:id',rateLimit.PostPutDeleteLimiter, controller.deleteCharacter)

router.put('/:id',rateLimit.PostPutDeleteLimiter, controller.updateCharacter)

router.get('/:id',rateLimit.queryLimiter, controller.getById)

module.exports = router;