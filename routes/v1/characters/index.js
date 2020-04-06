const express = require( 'express' );
let router = express.Router();
const controller = require( '../../../controllers/character.controller' )



router.get('/', controller.getAll);

router.post('/', controller.createCharacter);

router.delete('/:id', controller.deleteCharacter)

router.put('/:id', controller.updateCharacter)

router.get('/:id', controller.getById)

module.exports = router;