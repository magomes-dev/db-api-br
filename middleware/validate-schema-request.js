const joi = require('joi'); 

const middleware = (schema, property) => { 
    return (req, res, next) => { 
    const { error } = joi.validate(req.body, schema, { abortEarly: false }); // exibe todos os erros de validação
    const valid = error == null; 
  
    if (valid) { 
      next(); 
    } else {
     res.status(422).json({ success: false, error: error.details }) } 
    } 
  } 
  module.exports = middleware;