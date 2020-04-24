/* eslint-disable arrow-body-style */
const PlanetService = require('../services/planet.service');

async function getAll(req, res, next) {
  PlanetService.getAll()
    .then((result) => { return res.status(200).json(result); })
    .catch((error) => { next(error); });
}

async function createPlanet(req, res, next) {
  PlanetService.createPlanet(req.body)
    .then((result) => { return res.status(200).json(result); })
    .catch((error) => { next(error); });
}

async function deletePlanet(req, res, next) {
  PlanetService.deletePlanet(req.params.id)
    .then((result) => { return res.status(200).json(result); })
    .catch((error) => { next(error); });
}

async function updatePlanet(req, res, next) {
  PlanetService.updatePlanet(req.params.id, req.body)
    .then((result) => { return res.status(200).json(result); })
    .catch((error) => { next(error); });
}

async function getById(req, res, next) {
  PlanetService.getById(req.params.id)
    .then((result) => { return res.status(200).json(result); })
    .catch((error) => { next(error); });
}

module.exports = {
  getAll,
  createPlanet,
  deletePlanet,
  updatePlanet,
  getById,
};
