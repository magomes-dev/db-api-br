/* eslint-disable import/no-unresolved */
const express = require('express');

const router = express.Router();
const controller = require('controllers/user.controller');
const rateLimit = require('middleware/rate-limit');
const { user } = require('routes/schemas/schemas');
const middleware = require('middleware/validate-schema');

router.post('/register', middleware(user.register), rateLimit.registerLimiter, controller.createUser);

router.post('/authenticate', middleware(user.authenticate), controller.authenticateUser);

module.exports = router;
