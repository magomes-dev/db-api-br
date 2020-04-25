/* eslint-disable arrow-body-style */
const SerieService = require('../services/serie.service');


async function getAll(req, res, next) {
  SerieService.getAll()
    .then((result) => { return res.status(200).json(result); })
    .catch((error) => { next(error); });
}

async function createSerie(req, res, next) {
  SerieService.createSerie(req.body)
    .then((result) => { return res.status(201).json(result); })
    .catch((error) => { next(error); });
}

async function deleteSerie(req, res, next) {
  SerieService.deleteSerie(req.params.id)
    .then((result) => { return res.status(200).json(result); })
    .catch((error) => { next(error); });
}

async function updateSerie(req, res, next) {
  SerieService.updateSerie(req.params.id, req.body)
    .then((result) => { return res.status(200).json(result); })
    .catch((error) => { next(error); });
}

async function getById(req, res, next) {
  SerieService.getById(req.params.id)
    .then((result) => { return res.status(200).json(result); })
    .catch((error) => { next(error); });
}

module.exports = {
  getAll,
  createSerie,
  deleteSerie,
  updateSerie,
  getById,
};
