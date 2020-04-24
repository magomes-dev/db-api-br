/* eslint-disable prefer-destructuring */
const expressJwt = require('express-jwt');
const config = require('../config.json');
const userService = require('../services/user.service');

async function isRevoked(req, payload, done) {
  const user = await userService.getById(payload.id);
  if (!user) {
    return done(null, true);
  }
  return done();
}

function jwt() {
  const secret = config.secret;
  return expressJwt({ secret, isRevoked }).unless({
    path: [
      // public routes that don't require authentication
      '/',
      '/v1/users/authenticate',
      '/v1/users/register',
    ],
  });
}
module.exports = jwt;
