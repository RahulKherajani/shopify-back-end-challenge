const express = require('express');
const router = express.Router();

const database = require('../persistence/database.js');

router.get('/delete/:id', (req, res) => {
  res.render('../views/delete.ejs', { id: req.params.id });
});

router.post('/delete/:id', (req, res) => {
  
    database.getKey("items").then((items) => {
    items[req.params.id - 1].status = 'inactive';
    database.setKey("items", items);
    database.getKey("comments").then((comments) => {
      const length = comments.length;
      comments.push({ id: length + 1, itemid: req.params.id, comment: req.body.comment});
      database.setKey("comments", comments).then(()=> {
        res.redirect('/');
      });
    });
  });
});

module.exports = router;
