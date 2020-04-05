const {Serie} = require('../models');

module.exports = {
    getAll,
    createSerie,
    deleteSerie,
    updateSerie,
    getById
}


async function getAll(){

    return Serie.findAll()
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
async function createSerie(serieToCreate){

    try {        
        //Verifica se existe um planeta com este nome
        const testUnique = await Serie.findOne({
            where: { name: serieToCreate.name }
        });

        if (testUnique != null) {
            return { success: false, error: "Esta saga já existe" };   
        }        
        
        return Serie.create(serieToCreate)
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
async function deleteSerie(id){
    return Serie.destroy({ where: {id: id} })
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
async function updateSerie(id, serieToUpdate){
    return Serie.update(serieToUpdate, {where: { id: id } })
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
    return Serie.findByPk(id)            
    .then( result => {
        return { success: true, body: result }
    })
    .catch( err => {
        return { success: false, error: err.toString() }
    })
}

