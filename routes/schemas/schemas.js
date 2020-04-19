// schemas.js 
const Joi = require('joi') 

const user = {  
  register: Joi.object().keys({ 
    userName: Joi.string().regex(/^[a-z0-9_-]{3,30}$/).alphanum().min(3).max(30).required(),//letras, numeros, _ e -
    firstName: Joi.string().min(3).max(30).required(),
    lastName: Joi.string().min(3).max(30).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).alphanum().required()
  }),
  authenticate: Joi.object().keys({ 
    userName: Joi.string().alphanum().required(),    
    password: Joi.string().alphanum().required()
  })
}; 

const species = {
  create: Joi.object().keys({
    name: Joi.string().min(3).max(100).required(),
    description: Joi.string().min(3).max(2000).required(),
  }),
  update: Joi.object().keys({
    name: Joi.string().min(3).max(100),
    description: Joi.string().min(3).max(2000)
  })
}

const series = {
  create: Joi.object().keys({
    name: Joi.string().min(3).max(100).required(),
    description: Joi.string().min(3).max(2000).required(),
    image: Joi.string(),
  }),
  update: Joi.object().keys({
    name: Joi.string().min(3).max(100),
    description: Joi.string().min(3).max(2000),
    image: Joi.string(),
  }),
}

const planets = {
  create: Joi.object().keys({
    name: Joi.string().min(3).max(100).required(),
    image: Joi.string(),
  }),
  update: Joi.object().keys({
    name: Joi.string().min(3).max(100),
    image: Joi.string()
  }),
}

const characters = {
  create: Joi.object().keys({
    name: Joi.string().min(3).max(100).required(),
    gender: Joi.string().min(1).max(1).required(),
    image: Joi.string(),
    speciesId: Joi.number().integer().required(),
    originPlanetId: Joi.number().integer().required(),
    originalSerieId: Joi.number().integer().required(),
  }),
  update: Joi.object().keys({
    name: Joi.string().min(3).max(100),
    gender: Joi.string().min(1).max(1),
    image: Joi.string(),
    speciesId: Joi.number().integer(),
    originPlanetId: Joi.number().integer(),
    originalSerieId: Joi.number().integer()
  }),
}

module.exports = {
  user,
  species,
  series,
  planets,
  characters
}