const express = require('express');


const PlanetService = require('../services/planet.service');


async function getAll (req, res) {
    return res.status(200).json( await PlanetService.getAll());
}

async function createPlanet(req, res) {
    try {
        const result = await PlanetService.createPlanet(req.body);   
        console.log(result);
        if ( result.success === true ) return res.status(201).json(result.body);
        else  return res.status(400).json(result.error);
    } catch (err) {
        re.status(500).json(err.error)
    }
}

module.exports = {
    getAll,
    createPlanet
}

