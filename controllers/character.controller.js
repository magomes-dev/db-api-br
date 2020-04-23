/* eslint-disable arrow-body-style */
const CharacterService = require('../services/character.service');


async function getAll(req, res, next) {
  CharacterService.getAll()
    .then((result) => { return res.status(200).json(result.body); })
    .catch((error) => { next(error); });
}

async function createCharacter(req, res, next) {
  CharacterService.createCharacter(req.body)
    .then((result) => { return res.status(201).json(result.body); })
    .catch((error) => { next(error); });
}

async function deleteCharacter(req, res, next) {
  const { id } = req.params.id;
  CharacterService.deleteCharacter(id)
    .then((result) => { return res.status(200).json(result.body); })
    .catch((error) => { next(error); });
}

async function updateCharacter(req, res, next) {
  const { id } = req.params.id;
  CharacterService.updateCharacter(id, req.body)
    .then((result) => { return res.status(200).json(result.body); })
    .catch((error) => { next(error); });
}

async function getById(req, res, next) {
  const { id } = req.params.id;
  CharacterService.getById(id)
    .then((result) => { return res.status(200).json(result.body); })
    .catch((error) => { next(error); });
}

module.exports = {
  getAll,
  createCharacter,
  deleteCharacter,
  updateCharacter,
  getById,
};
