const express = require( 'express' );
let router = express.Router();
const controller = require( '../../../controllers/species.controller' )



router.get('/', controller.getAll);

router.post('/', controller.createSpecies);

router.delete('/:id', controller.deleteSpecies)

router.put('/:id', controller.updateSpecies)

router.get('/:id', controller.getById)

module.exports = router;