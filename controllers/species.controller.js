const SpeciesService = require('../services/species.service');


async function getAll(req, res) {
    const result = await SpeciesService.getAll(); 
    if ( result.success === true ) return res.status(200).json(result.body);
    return res.status(400).json( {error: result.error});
}

async function createSpecies(req, res) {
    try{

        const result = await SpeciesService.createSpecies(req.body); 
        if ( result.success === true ) return res.status(201).json(result.body);
        return res.status(400).json( {error: result.error});

    }catch (err) {
        res.status(500).json(err.error)
    }
}

async function deleteSpecies(req, res){
    const id = req.params.id;
    const result = await SpeciesService.deleteSpecies(id);
    if ( result.success === true ) return res.status(200).json(result.body);
    else  return res.status(400).json( {error: result.error});    
}

async function updateSpecies(req, res){

    const id = req.params.id;
    const result = await SpeciesService.updateSpecies(id, req.body);
    if ( result.success === true ) return res.status(200).json(result.body);
    else  return res.status(400).json( {error: result.error});     

}

async function getById(req, res){
    const id = req.params.id;
    const result = await SpeciesService.getById(id);
    if ( result.success === true ) return res.status(200).json(result.body);
    else  return res.status(400).json( {error: result.error}); 
}

module.exports = {
    getAll,
    createSpecies,
    deleteSpecies,
    updateSpecies,
    getById
}

