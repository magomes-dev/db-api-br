const express = require('express');
const router = express.Router();

const PlanetService = require('../services/planet.service');


async function getAll (req, res){
    return res.status(200).json( await PlanetService.getAll());
}

//get all planets
router.get('/', async (req, res) => {
    res.status(200).json( await PlanetService.getAll());
}); 

//new planet
router.post('/', async (req, res) => {  
    try {
        const result = await PlanetService.createPlanet(req.body);        
        if ( result.success === true ) return res.status(201).json(result.body);
        else  return res.status(400).json(result.error);
    } catch (err) {
        re.status(500).json(err.error)
    }
}); 

//get specific planet
router.get('/:id', (req, res) => { 
    
}); 

//edit planet
router.put('/:id', (req, res) => {
}); 

//delete planet
router.delete('/:id', (req, res) =>{  

}) 

//module.exports = router;
module.exports = { getAll }

