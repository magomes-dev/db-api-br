/* eslint-disable arrow-body-style */
/* eslint-disable import/no-unresolved */
const joi = require('joi');
const ValidationSchemaError = require('utils/ValidationSchemaError');

const middleware = (schema) => {
  return (req, res, next) => {
    const { error } = joi.validate(req.body, schema, { abortEarly: false });
    const valid = error == null;

    if (valid) {
      next();
    } else {
      const details = error.details.map((i) => i.message);
      next(new ValidationSchemaError(error, details));
    }
  };
};

module.exports = middleware;
