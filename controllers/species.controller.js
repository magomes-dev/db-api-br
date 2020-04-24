/* eslint-disable arrow-body-style */
const SpeciesService = require('../services/species.service');

async function getAll(req, res, next) {
  await SpeciesService.getAll()
    .then((result) => { return res.status(200).json(result); })
    .catch((error) => { next(error); });
}

async function createSpecies(req, res, next) {
  SpeciesService.createSpecies(req.body)
    .then((result) => { return res.status(201).json(result); })
    .catch((error) => { next(error); });
}

async function deleteSpecies(req, res, next) {
  const { id } = req.params.id;
  SpeciesService.deleteSpecies(id)
    .then((result) => { return res.status(200).json(result); })
    .catch((error) => { next(error); });
}

async function updateSpecies(req, res, next) {
  const { id } = req.params.id;
  SpeciesService.updateSpecies(id, req.body)
    .then((result) => { return res.status(200).json(result); })
    .catch((error) => { next(error); });
}

async function getById(req, res, next) {
  const { id } = req.params.id;
  SpeciesService.getById(id)
    .then((result) => { return res.status(200).json(result.body); })
    .catch((error) => { next(error); });
}

module.exports = {
  getAll,
  createSpecies,
  deleteSpecies,
  updateSpecies,
  getById,
};
