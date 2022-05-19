const express = require('express');
const router = express.Router();
const { deleteAnItem } = require('../controllers/itemController');

router.get('/delete/:id', (req, res) => {
  res.render('../views/delete.ejs', { id: req.params.id });
});

router.post('/delete/:id', deleteAnItem);

module.exports = router;
