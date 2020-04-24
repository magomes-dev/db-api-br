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
  const { id } = req.params.id;
  SerieService.deleteSerie(id)
    .then((result) => { return res.status(200).json(result); })
    .catch((error) => { next(error); });
}

async function updateSerie(req, res, next) {
  const { id } = req.params.id;
  SerieService.updateSerie(id, req.body)
    .then((result) => { return res.status(200).json(result); })
    .catch((error) => { next(error); });
}

async function getById(req, res, next) {
  const { id } = req.params.id;
  SerieService.getById(id)
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
