const express = require('express');
const router = express.Router();
const { unDeleteAnItem } = require('../controllers/itemController');

router.post('/undo/:id', unDeleteAnItem);

module.exports = router;
