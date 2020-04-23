/* eslint-disable import/no-unresolved */
const express = require('express');

const router = express.Router();
const controller = require('controllers/planet.controller');
const rateLimit = require('middleware/rate-limit');
const { planets } = require('routes/schemas/schemas');
const middleware = require('middleware/validate-schema');

router.get('/', rateLimit.queryLimiter, controller.getAll);

router.post('/', middleware(planets.create), rateLimit.PostPutDeleteLimiter, controller.createPlanet);

router.delete('/:id', rateLimit.PostPutDeleteLimiter, controller.deletePlanet);

router.put('/:id', middleware(planets.update), rateLimit.PostPutDeleteLimiter, controller.updatePlanet);

router.get('/:id', rateLimit.queryLimiter, controller.getById);

module.exports = router;
