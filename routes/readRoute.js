const express = require('express');
const router = express.Router();

const database = require('../persistence/database.js');

router.get('/', async function (req, res) {
  try{
  database.getKey('items').then((items) => {
    database.getKey('comments').then((comments) => {
      res.render('../views/read.ejs', { items: items, comments: comments}); 
    });
  });
  } catch(err) {
    res.redirect('/error');
  }
});

module.exports = router;
