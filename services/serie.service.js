/* eslint-disable import/no-unresolved */
const { Serie } = require('database/models');
const BusinessLogicError = require('utils/BusinessLogicError');

async function getAll() {
  return Serie.findAll({ include: 'characters' });
}

/**
 * @returns {Promise<{success: boolean, error: *}|{success: boolean, body: *}>}
 */
async function createSerie(serieToCreate) {
  const testUnique = await Serie.findOne({
    where: { name: serieToCreate.name },
  });
  if (testUnique != null) {
    throw new BusinessLogicError('Esta saga já existe');
  }
  return Serie.create(serieToCreate);
}

/**
 * @returns {Promise<{success: boolean, error: *}|{success: boolean, body: *}>}
 */
async function deleteSerie(id) {
  return Serie.destroy({ where: { id } });
}

/**
 * @returns {Promise<{success: boolean, error: *}|{success: boolean, body: *}>}
 */
async function updateSerie(id, serieToUpdate) {
  return Serie.update(serieToUpdate, { where: { id } });
}

/**
 * @returns {Promise<{success: boolean, error: *}|{success: boolean, body: *}>}
 */
async function getById(id) {
  return Serie.findByPk(id, { include: 'characters' });
}

module.exports = {
  getAll,
  createSerie,
  deleteSerie,
  updateSerie,
  getById,
};
