const models = require('../models');
const { Character } = require('../models');

module.exports = {
    getAll,
    createPlanet,
    deletePlanet,
    updatePlanet,
    getById
}


async function getAll(){
    return models.Planet.findAll( { include: 'characters' } )
    .then(result => {
        return { success: true, body: result };
    })
    .catch(err =>{
        return { success: false, error: err.toString() };
    });
}
/**
 * @returns {Promise<{success: boolean, error: *}|{success: boolean, body: *}>}
 */
async function createPlanet(planetToCreate){

    try {        
        //Verifica se existe um planeta com este nome
        const testUnique = await models.Planet.findOne({
            where: { name: planetToCreate.name }
        });

        if (testUnique != null) {
            return { success: false, error: "Este planeta já existe" };   
        }        
        
        return models.Planet.create(planetToCreate)
                .then( result => { 
                    console.log('result: ' + result)
                    return { success: true, body: result };
                })
                .catch(function (err) {
                    console.log('Create planet erro: ' + err)
                    return { success: false, error: err.toString() };
                })
        
    } catch (err) {
        console.log('catch: ' + err);
        return { success: false, error: err.toString() };
    }
}

/**
 * @returns {Promise<{success: boolean, error: *}|{success: boolean, body: *}>}
 */
async function deletePlanet(id){
    return models.Planet.destroy({ where: {id: id} })
            .then( result => {
                return { success: true, body: result }
            })
            .catch( err => {
                return { success: false, error: err.toString() }
            })
}

/**
 * @returns {Promise<{success: boolean, error: *}|{success: boolean, body: *}>}
 */
async function updatePlanet(id, planetToUpdate){
    return models.Planet.update(planetToUpdate, {where: { id: id } })
            .then( result => {
                return { success: true, body: result }
            })
            .catch( err => {
                return { success: false, error: err.toString() }
            })
}

/**
 * @returns {Promise<{success: boolean, error: *}|{success: boolean, body: *}>}
 */
async function getById(id){
    return models.Planet.findByPk(id, { include: 'characters' } )            
    .then( result => {
        return { success: true, body: result }
    })
    .catch( err => {
        return { success: false, error: err.toString() }
    })
}

