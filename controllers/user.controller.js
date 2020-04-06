const UserService = require('../services/user.service');


async function createUser(req, res) {
    try{

        const result = await UserService.create(req.body); 
        if ( result.success === true ) return res.status(201).json(result.body);
        return res.status(400).json( {error: result.error});

    }catch (err) {
        res.status(500).json(err.error)
    }
}

async function authenticateUser(req, res){
    
    const result = await UserService.authenticate(req.body);
    if ( result.success === true ) return res.status(200).json(result.body);
    else  return res.status(400).json( {error: result.error});    
}

// async function updateUser(req, res){

//     const id = req.params.id;
//     const result = await UsereUser(id, req.body);
//     if ( result.success === true ) return res.status(200).json(result.body);
//     else  return res.status(400).json( {error: result.error});     

// }

async function getById(req, res){
    const id = req.params.id;
    const result = await User.getById(id);
    if ( result.success === true ) return res.status(200).json(result.body);
    else  return res.status(400).json( {error: result.error}); 
}

module.exports = {
    authenticateUser,
    createUser
}
