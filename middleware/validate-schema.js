const joi = require('joi'); 
const ValidationSchemaError = require('utils/ValidationSchemaError')

const middleware = (schema, property) => { 
    return (req, res, next) => { 
    const  {error} = joi.validate(req.body, schema, { abortEarly: false }); // exibe todos os erros de validação
    const valid = error == null; 
  
    if (valid) { 
      next(); 
    } else {
      const details = error.details.map(i => i.message);
      next( new ValidationSchemaError(error, details));     
    } 
  } 
} 

module.exports = middleware;