const rateLimit = require("express-rate-limit");

const queryLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // limit each IP to 100 requests per windowMs
    message:
    "O limite de consultas a partir deste IP foi excedido, tente novamente após quinze minutos"
  });

  const registerLimiter = rateLimit({
    windowMs: 60 * 60 * 1000, // 1 hour window
    max: 2, // start blocking after 5 requests
    message:
      "O limite de contas criadas a partir deste IP foi excedido, tente novamente após uma hora"
  });

  const PostPutDeleteLimiter = rateLimit({
    windowMs: 10 * 60 * 1000, // 10 minutes
    max: 5, // start blocking after 5 requests
    message:
      "O limite de operações de escrita a partir deste IP foi excedido, tente novamente após quinze minutos"
  });

module.exports = {
    queryLimiter,
    registerLimiter,
    PostPutDeleteLimiter
}