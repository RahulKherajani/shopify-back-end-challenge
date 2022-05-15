const express = require('express');
const router = express.Router();
const database = require('../persistence/database.js');

router.get('/create', (req, res) => {
  res.render('../views/create.ejs');
});

router.post('/create', (req, res) => {
  try {
    database.getKey("items").then((value) => {
      const length = value.length;
      value.push({ id: length + 1, status: 'active', name:req.body.name, description: req.body.description, quantity: req.body.quantity});
      database.setKey("items", value).then(()=> {
        res.redirect('/');
      })
    })
  } catch (err) {
    return res
      .status(500)
      .json({ message: 'Internal server error', success: 'false' });
  }
});

module.exports = router;
