const express = require( 'express' );
let router = express.Router();
const controller = require( '../../../controllers/planet.controller' )



router.get('/', controller.getAll);

router.post('/', controller.createPlanet);

router.delete('/:id', controller.deletePlanet)

router.put('/:id', controller.updatePlanet)

router.get('/:id', controller.getById)

module.exports = router;