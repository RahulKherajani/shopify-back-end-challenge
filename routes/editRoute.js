const express = require('express');

const router = express.Router();

router.get('/edit/:id', (req, res) => {
  res.render('../views/edit.ejs', { id: req.params.id });
});

router.post('/edit/:id', (req, res) => {
  try {
    console.log('Hello');
    console.log(req.params.id);
    console.log(req.body);
  } catch (err) {
    return res
      .status(500)
      .json({ message: 'Internal server error', success: 'false' });
  }
});

module.exports = router;
