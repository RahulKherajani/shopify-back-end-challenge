const express = require('express');
const router = express.Router();
const { createAnItem } = require('../controllers/itemController');
const { findAllCities } = require('../controllers/cityController');

router.get('/create', findAllCities);

router.post('/create', createAnItem);

module.exports = router;
