/* eslint-disable import/no-unresolved */
/* eslint-disable arrow-body-style */
/* eslint-disable no-param-reassign */
const config = require('config.json');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { User } = require('database/models');
const BusinessLogicError = require('utils/BusinessLogicError');

async function authenticate({ userName, password }) {
  return User.findOne({
    where: { userName },
  })
    .then((user) => {
      if (user && bcrypt.compareSync(password, user.hash)) {
        const data = {
          id: user.id,
          userName: user.userName,
          email: user.email,
          firstName: user.firstName,
        };
        const token = jwt.sign(data, config.secret, { expiresIn: '6h' });
        return { token };
      }
      throw new BusinessLogicError('Usuário/Senha incorreto!');
    });
}

async function getById(id) {
  return User.findByPk(id)
    .then((user) => {
      return {
        id: user.id,
        userName: user.userName,
        email: user.email,
        firstName: user.firstName,
      };
    });
}

async function create(createUser) {
  const testUnique = await User.findOne({
    where: { userName: createUser.userName },
  });
  if (testUnique != null) {
    throw new BusinessLogicError('Usuario já registrado');
  }
  if (createUser.password) {
    createUser.hash = bcrypt.hashSync(createUser.password, 10);
  }

  return User.create(createUser)
    .then((user) => {
      return {
        id: user.id,
        userName: user.userName,
        email: user.email,
        firstName: user.firstName,
      };
    });
}

module.exports = {
  authenticate,
  create,
  getById,
};
