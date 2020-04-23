/* eslint-disable arrow-body-style */
/* eslint-disable import/no-unresolved */
const UserService = require('services/user.service');

async function createUser(req, res, next) {
  UserService.create(req.body)
    .then((result) => {
      return res.status(201).json(result);
    })
    .catch((error) => {
      next(error);
    });
}

async function authenticateUser(req, res, next) {
  UserService.authenticate(req.body)
    .then((result) => {
      return res.status(200).json(result);
    }).catch((error) => {
      next(error);
    });
}

module.exports = {
  authenticateUser,
  createUser,
};
