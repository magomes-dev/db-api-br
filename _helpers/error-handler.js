module.exports = errorHandler;

function errorHandler(err, req, res, next){
    
    if(typeof(err) === 'string'){
        return res.status(400).json({error: err});
    }

    if(err.name === 'UnauthorizedError'){
        //autorização jwt
        return res.status(401).json({error: "Token inválido!"});
    }
    
    //default server error (500)
    return res.status(500).json({error: err.message});

}