/* eslint-disable import/no-unresolved */
const { Character } = require('database/models');
const { Species } = require('database/models');
const { Planet } = require('database/models');
const { Serie } = require('database/models');
const BusinessLogicError = require('utils/BusinessLogicError');

async function getAll() {
  return Character.findAll({
    include: [{
      model: Species,
      attributes: ['id', 'name'],
      as: 'species',
    },
    {
      model: Planet,
      attributes: ['id', 'name'],
      as: 'planet',
    },
    {
      model: Serie,
      attributes: ['id', 'name'],
      as: 'serie',
    }],
  });
}

/**
 * @returns {Promise<{success: boolean, error: *}|{success: boolean, body: *}>}
 */
async function createCharacter(CharacterToCreate) {
  const testUnique = await Character.findOne({
    where: { name: CharacterToCreate.name },
  });

  if (testUnique != null) {
    throw new BusinessLogicError('Este personagem já existe');
  }
  return Character.create(CharacterToCreate);
}

/**
 * @returns {Promise<{success: boolean, error: *}|{success: boolean, body: *}>}
 */
async function deleteCharacter(id) {
  return Character.destroy({ where: { id } });
}

/**
 * @returns {Promise<{success: boolean, error: *}|{success: boolean, body: *}>}
 */
async function updateCharacter(id, CharacterToUpdate) {
  return Character.update(CharacterToUpdate, { where: { id } });
}

/**
 * @returns {Promise<{success: boolean, error: *}|{success: boolean, body: *}>}
 */
async function getById(id) {
  return Character.findByPk(id, {
    include: [
      {
        model: Species,
        attributes: ['id', 'name'],
        as: 'species',
      },
      {
        model: Planet,
        attributes: ['id', 'name'],
        as: 'planet',
      },
      {
        model: Serie,
        attributes: ['id', 'name'],
        as: 'serie',
      }],
  });
}

module.exports = {
  getAll,
  createCharacter,
  deleteCharacter,
  updateCharacter,
  getById,
};
