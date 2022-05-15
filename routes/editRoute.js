const express = require('express');
const router = express.Router();
const database = require('../persistence/database.js');

router.get('/edit/:id', (req, res) => {
  try{
  database.getKey("items").then((value) => {
    const item = value[req.params.id - 1]
    res.render('../views/edit.ejs', {item: item});
  });
  } catch(err) {
    res.redirect('/error');
  }
});

router.post('/edit/:id', (req, res) => {
  try {
    database.getKey("items").then((value) => {
    value[req.params.id - 1].name = req.body.name;
    value[req.params.id - 1].quantity = req.body.quantity;
    value[req.params.id - 1].description = req.body.description;
    database.setKey("items", value).then(()=> {
        res.redirect('/');
      });
  });
  } catch(err) {
    res.redirect('/error');
  }
});

module.exports = router;
