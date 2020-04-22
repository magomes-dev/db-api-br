function successResponse(body, status, req, res, next){
    console.log('entrou response', status && body)
    if(status && body){
        return res.status(status).json(body);
    }
    next(body)
}
    

module.exports = successResponse;