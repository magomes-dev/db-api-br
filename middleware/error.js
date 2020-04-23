function errorHandler(err, req, res, next) {
  if (err.name === 'BusinessLogicError') {
    return res.status(400).json({
      succes: false,
      name: 'BusinessLogicError',
      error: err.message,
    });
  }

  if (err.name === 'UnauthorizedError') {
    return res.status(401).json({
      succes: false,
      name: 'UnauthorizedError',
      error: 'Token inválido!',
    });
  }

  if (err.name === 'ValidationSchemaError') {
    return res.status(err.status).json({
      success: false,
      name: 'ValidationSchemaError',
      error: err.details,
    });
  }

  // Default server error (500)
  return res.status(500).json({
    succes: false,
    name: err.name,
    error: err.message,
  });
}

module.exports = errorHandler;
