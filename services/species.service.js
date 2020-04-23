/* eslint-disable import/no-unresolved */
const { Species } = require('database/models');
const BusinessLogicError = require('utils/BusinessLogicError');

async function getAll() {
  return Species.findAll({ include: 'characters' });
}
/**
 * @returns {Promise<{success: boolean, error: *}|{success: boolean, body: *}>}
 */
async function createSpecies(SpeciesToCreate) {
  const testUnique = await Species.findOne({
    where: { name: SpeciesToCreate.name },
  });

  if (testUnique != null) {
    throw new BusinessLogicError('Esta especie já existe');
  }
  return Species.create(SpeciesToCreate);
}

/**
 * @returns {Promise<{success: boolean, error: *}|{success: boolean, body: *}>}
 */
async function deleteSpecies(id) {
  return Species.destroy({ where: { id } });
}

/**
 * @returns {Promise<{success: boolean, error: *}|{success: boolean, body: *}>}
 */
async function updateSpecies(id, SpeciesToUpdate) {
  return Species.update(SpeciesToUpdate, { where: { id } });
}

/**
 * @returns {Promise<{success: boolean, error: *}|{success: boolean, body: *}>}
 */
async function getById(id) {
  return Species.findByPk(id, { include: 'characters' });
}

module.exports = {
  getAll,
  createSpecies,
  deleteSpecies,
  updateSpecies,
  getById,
};
