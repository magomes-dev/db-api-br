function BusinessLogicError(error) {
  this.name = 'BusinessLogicError';
  this.message = error;
  Error.call(this, error);
  Error.captureStackTrace(this, this.constructor);
  this.status = 400;
}

BusinessLogicError.prototype = Object.create(Error.prototype);
BusinessLogicError.prototype.constructor = BusinessLogicError;

module.exports = BusinessLogicError;
