const SerieService = require('../services/serie.service');


async function getAll(req, res) {
    const result = await SerieService.getAll(); 
    if ( result.success === true ) return res.status(200).json(result.body);
    return res.status(400).json( {error: result.error});
}

async function createSerie(req, res) {
    try{

        const result = await SerieService.createSerie(req.body); 
        if ( result.success === true ) return res.status(201).json(result.body);
        return res.status(400).json( {error: result.error});

    }catch (err) {
        res.status(500).json(err.error)
    }
}

async function deleteSerie(req, res){
    const id = req.params.id;
    const result = await SerieService.deleteSerie(id);
    if ( result.success === true ) return res.status(200).json(result.body);
    else  return res.status(400).json( {error: result.error});    
}

async function updateSerie(req, res){

    const id = req.params.id;
    const result = await SerieService.updateSerie(id, req.body);
    if ( result.success === true ) return res.status(200).json(result.body);
    else  return res.status(400).json( {error: result.error});     

}

async function getById(req, res){
    const id = req.params.id;
    const result = await SerieService.getById(id);
    if ( result.success === true ) return res.status(200).json(result.body);
    else  return res.status(400).json( {error: result.error}); 
}

module.exports = {
    getAll,
    createSerie,
    deleteSerie,
    updateSerie,
    getById
}

