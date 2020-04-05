const express = require('express');


const PlanetService = require('../services/planet.service');


async function getAll(req, res) {
    return res.status(200).json( await PlanetService.getAll());
}

async function createPlanet(req, res) {
    try{

        const result = await PlanetService.createPlanet(req.body); 
        if ( result.success === true ) return res.status(201).json(result.body);
        return res.status(400).json( {error: result.error});

    }catch (err) {
        res.status(500).json(err.error)
    }
}

async function deletePlanet(req, res){
    const id = req.params.id;
    const result = await PlanetService.deletePlanet(id);
    if ( result.success === true ) return res.status(200).json(result.body);
    else  return res.status(400).json( {error: result.error});    
}

async function updatePlanet(req, res){

    const id = req.params.id;
    const result = await PlanetService.updatePlanet(id, req.body);
    if ( result.success === true ) return res.status(200).json(result.body);
    else  return res.status(400).json( {error: result.error});     

}

async function getById(req, res){
    const id = req.params.id;
    const result = await PlanetService.updatePlanet(id);
    if ( result.success === true ) return res.status(200).json(result.body);
    else  return res.status(400).json( {error: result.error}); 
}

module.exports = {
    getAll,
    createPlanet,
    deletePlanet,
    updatePlanet,
    getById
}

