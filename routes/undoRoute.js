const express = require('express');
const router = express.Router();

const database = require('../persistence/database.js');

router.post('/undo/:id', (req, res) => {
  try{
    database.getKey("items").then((items) => {
    items[req.params.id - 1].status = 'active';
    database.setKey("items", items).then(() => {
      res.redirect('/');
    });
  });
  } catch(err) {
    res.redirect('/error');
  }
});

module.exports = router;
