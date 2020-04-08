require('rootpath')();
const {Character} = require('database/models');
const {Species} = require('database/models');
const {Planet} = require('database/models');
const {Serie} = require('database/models');


module.exports = {
    getAll,
    createCharacter,
    deleteCharacter,
    updateCharacter,
    getById
}


async function getAll(){

    return Character.findAll({ 
        include: [
            {
                model: Species,
                attributes: ['id', 'name'],
                as: 'species'
            },
            {
                model: Planet,
                attributes: ['id', 'name'],
                as: 'planet'                
            },
            { 
                model: Serie,
                attributes: ['id', 'name'],
                as: 'serie'
            }] 
        })
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
async function createCharacter(CharacterToCreate){

    try {        
        //Verifica se existe um planeta com este nome
        const testUnique = await Character.findOne({
            where: { name: CharacterToCreate.name }
        });

        if (testUnique != null) {
            return { success: false, error: "Este personagem já existe" };   
        }        
        
        return Character.create(CharacterToCreate)
                .then( result => { 
                    return { success: true, body: result };
                })
                .catch(function (err) {
                    return { success: false, error: err.toString() };
                })
        
    } catch (err) {
        return { success: false, error: err.toString() };
    }
}

/**
 * @returns {Promise<{success: boolean, error: *}|{success: boolean, body: *}>}
 */
async function deleteCharacter(id){
    return Character.destroy({ where: {id: id} })
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
async function updateCharacter(id, CharacterToUpdate){
    return Character.update(CharacterToUpdate, {where: { id: id } })
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
    return Character.findByPk(id,{ 
        include: [
            {
                model: Species,
                attributes: ['id', 'name'],
                as: 'species'
            },
            {
                model: Planet,
                attributes: ['id', 'name'],
                as: 'planet'                
            },
            { 
                model: Serie,
                attributes: ['id', 'name'],
                as: 'serie'
            }] 
        })            
    .then( result => {
        return { success: true, body: result }
    })
    .catch( err => {
        return { success: false, error: err.toString() }
    })
}

