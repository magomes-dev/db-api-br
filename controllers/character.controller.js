const CharacterService = require('../services/character.service');


async function getAll(req, res) {
    const result = await CharacterService.getAll(); 
    if ( result.success === true ) return res.status(200).json(result.body);
    return res.status(400).json( {error: result.error});
}

async function createCharacter(req, res) {
    try{

        const result = await CharacterService.createCharacter(req.body); 
        if ( result.success === true ) return res.status(201).json(result.body);
        return res.status(400).json( {error: result.error});

    }catch (err) {
        res.status(500).json(err.error)
    }
}

async function deleteCharacter(req, res){
    const id = req.params.id;
    const result = await CharacterService.deleteCharacter(id);
    if ( result.success === true ) return res.status(200).json(result.body);
    else  return res.status(400).json( {error: result.error});    
}

async function updateCharacter(req, res){

    const id = req.params.id;
    const result = await CharacterService.updateCharacter(id, req.body);
    if ( result.success === true ) return res.status(200).json(result.body);
    else  return res.status(400).json( {error: result.error});     

}

async function getById(req, res){
    const id = req.params.id;
    const result = await CharacterService.getById(id);
    if ( result.success === true ) return res.status(200).json(result.body);
    else  return res.status(400).json( {error: result.error}); 
}

module.exports = {
    getAll,
    createCharacter,
    deleteCharacter,
    updateCharacter,
    getById
}

