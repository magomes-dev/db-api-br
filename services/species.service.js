const {Species} = require('../models');

module.exports = {
    getAll,
    createSpecies,
    deleteSpecies,
    updateSpecies,
    getById
}


async function getAll(){

    return Species.findAll({ include: 'characters' })
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
async function createSpecies(SpeciesToCreate){

    try {        
        //Verifica se existe um planeta com este nome
        const testUnique = await Species.findOne({
            where: { name: SpeciesToCreate.name }
        });

        if (testUnique != null) {
            return { success: false, error: "Esta especie já existe" };   
        }        
        
        return Species.create(SpeciesToCreate)
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
async function deleteSpecies(id){
    return Species.destroy({ where: {id: id} })
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
async function updateSpecies(id, SpeciesToUpdate){
    return Species.update(SpeciesToUpdate, {where: { id: id } })
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
    return Species.findByPk(id, { include: 'characters' })            
    .then( result => {
        return { success: true, body: result }
    })
    .catch( err => {
        return { success: false, error: err.toString() }
    })
}

