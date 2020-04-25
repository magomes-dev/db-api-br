/* eslint-disable arrow-body-style */
const CharacterService = require('../services/character.service');


async function getAll(req, res, next) {
  CharacterService.getAll()
    .then((result) => { return res.status(200).json(result); })
    .catch((error) => { next(error); });
}

async function createCharacter(req, res, next) {
  CharacterService.createCharacter(req.body)
    .then((result) => { return res.status(201).json(result); })
    .catch((error) => { next(error); });
}

async function deleteCharacter(req, res, next) {
  CharacterService.deleteCharacter(req.params.id)
    .then((result) => { return res.status(200).json(result); })
    .catch((error) => { next(error); });
}

async function updateCharacter(req, res, next) {
  CharacterService.updateCharacter(req.params.id, req.body)
    .then((result) => { return res.status(200).json(result); })
    .catch((error) => { next(error); });
}

async function getById(req, res, next) {
  CharacterService.getById(req.params.id)
    .then((result) => { return res.status(200).json(result); })
    .catch((error) => { next(error); });
}

module.exports = {
  getAll,
  createCharacter,
  deleteCharacter,
  updateCharacter,
  getById,
};
