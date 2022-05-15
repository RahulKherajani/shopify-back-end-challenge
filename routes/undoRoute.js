const express = require('express');
const router = express.Router();

const database = require('../persistence/database.js');

router.post('/undo/:id', (req, res) => {
  
    database.getKey("items").then((items) => {
    items[req.params.id - 1].status = 'active';
    database.setKey("items", items).then(() => {
      res.redirect('/');
    });
  });
});

module.exports = router;
