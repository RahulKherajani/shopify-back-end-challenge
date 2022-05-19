const express = require('express');
const router = express.Router();
const { findAllItems } = require('../controllers/itemController');

router.get('/', findAllItems);

module.exports = router;
