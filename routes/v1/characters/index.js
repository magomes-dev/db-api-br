require('rootpath')();
const express = require( 'express' );
let router = express.Router();
const controller = require( 'controllers/character.controller' )
const rateLimit = require('middleware/rate-limit')
const {characters} = require('routes/schemas/schemas'); 
const middleware = require('middleware/validate-schema');



router.get('/', rateLimit.queryLimiter, controller.getAll);

router.post('/', middleware(characters.create), rateLimit.PostPutDeleteLimiter, controller.createCharacter);

router.delete('/:id',rateLimit.PostPutDeleteLimiter, controller.deleteCharacter)

router.put('/:id', middleware(characters.update), rateLimit.PostPutDeleteLimiter, controller.updateCharacter)

router.get('/:id',rateLimit.queryLimiter, controller.getById)

module.exports = router;