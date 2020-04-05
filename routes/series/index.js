const express = require( 'express' );
let router = express.Router();
const controller = require( '../../controllers/serie.controller' )



router.get('/', controller.getAll);

router.post('/', controller.createSerie);

router.delete('/:id', controller.deleteSerie)

router.put('/:id', controller.updateSerie)

router.get('/:id', controller.getById)

module.exports = router;