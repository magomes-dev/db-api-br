function ValidationSchemaError(error, details) {
  this.name = 'ValidationSchemaError';
  this.message = error;
  this.details = details;
  Error.call(this, error);
  Error.captureStackTrace(this, this.constructor);
  this.status = 422;
}

ValidationSchemaError.prototype = Object.create(Error.prototype);
ValidationSchemaError.prototype.constructor = ValidationSchemaError;

module.exports = ValidationSchemaError;
