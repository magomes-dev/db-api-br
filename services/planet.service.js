const models = require('database/models');
const BusinessLogicError = require('utils/BusinessLogicError')

async function getAll(){
    return models.Planet.findAll( { include: 'characters' } )
}

/**
 * @returns {Promise<{success: boolean, error: *}|{success: boolean, body: *}>}
 */
async function createPlanet(planetToCreate){
        //Verifica se existe um planeta com este nome
        const testUnique = await models.Planet.findOne({
            where: { name: planetToCreate.name }
        });

        if (testUnique != null){
            throw new BusinessLogicError ("Este planeta já existe")
        }        
        
        return models.Planet.create(planetToCreate)
        
}

/**
 * @returns {Promise<{success: boolean, error: *}|{success: boolean, body: *}>}
 */
async function deletePlanet(id){
    return models.Planet.destroy({ where: { id: id } })
}

/**
 * @returns {Promise<{success: boolean, error: *}|{success: boolean, body: *}>}
 */
async function updatePlanet(id, planetToUpdate){
    return models.Planet.update(planetToUpdate, { where: { id: id } })
}

/**
 * @returns {Promise<{success: boolean, error: *}|{success: boolean, body: *}>}
 */
async function getById(id){
    return models.Planet.findByPk(id, { include: 'characters' })
}

module.exports = {
    getAll,
    createPlanet,
    deletePlanet,
    updatePlanet,
    getById
}