const express = require('express');
const router = express.Router();
const { findAnItem, editAnItem } = require('../controllers/itemController');

router.get('/edit/:id', findAnItem);

router.post('/edit/:id', editAnItem);

module.exports = router;
