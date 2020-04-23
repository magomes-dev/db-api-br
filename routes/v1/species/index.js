/* eslint-disable import/no-unresolved */
const express = require('express');

const router = express.Router();
const controller = require('controllers/species.controller');
const rateLimit = require('middleware/rate-limit');
const { species } = require('routes/schemas/schemas');
const middleware = require('middleware/validate-schema');

router.get('/', rateLimit.queryLimiter, controller.getAll);

router.post('/', middleware(species.create), rateLimit.PostPutDeleteLimiter, controller.createSpecies);

router.delete('/:id', rateLimit.PostPutDeleteLimiter, controller.deleteSpecies);

router.put('/:id', middleware(species.update), rateLimit.PostPutDeleteLimiter, controller.updateSpecies);

router.get('/:id', rateLimit.queryLimiter, controller.getById);

module.exports = router;
