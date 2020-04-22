const PlanetService = require('../services/planet.service');


async function getAll(req, res, next) {
    PlanetService.getAll()
        .then(result => {
            return res.status(200).json(result);
        })
        .catch(error => {
            next(error)
        });   
    
}

async function createPlanet(req, res, next) {
    PlanetService.createPlanet(req.body)
        .then(result => {                
            return res.status(201).json(result.body);
        })
        .catch(error => {
            next(error)
        });   
}

async function deletePlanet(req, res, next){
    const id = req.params.id;
    PlanetService.deletePlanet(id)
        .then(result => {
            return res.status(200).json(result);
        })
        .catch(error => {
            next(error)
        });   
}

async function updatePlanet(req, res, next){
    const id = req.params.id;    
    PlanetService.updatePlanet(id, req.body)
        .then(result => {
            return res.status(200).json(result);
        })
        .catch(error => {
            next(error)
        });     
}

async function getById(req, res, next){
    const id = req.params.id;
    PlanetService.getById(id)
        .then(result => {
            return res.status(200).json(result);
        })
        .catch(error => {
            next(error)
        });    
}

module.exports = {
    getAll,
    createPlanet,
    deletePlanet,
    updatePlanet,
    getById
}

