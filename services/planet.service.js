const models = require('../models');

module.exports = {
    getAll,
    createPlanet
}


async function getAll(){
    return await models.Planet.findAll();
}
/**
 * @returns {Promise<{success: boolean, error: *}|{success: boolean, body: *}>}
 */
async function createPlanet(planetToCreate){

    try {
        //Verifica se já não existe um planeta com este nome
        const testUnique = await models.Planet.findOne({
            where: { name: planetToCreate.name }
        });

        if (testUnique != null) {
            return { success: false, error: "Este planeta já existe" };   
        }        

        
        const planet = await models.Planet.create(planetToCreate);
        
        return { success: false, body: planet.id }

    } catch (err) {
        return { success: false, error: err };
    }
}