const express = require('express');

const router = express.Router();

router.get('/delete/:id', (req, res) => {
  res.render('../views/delete.ejs', { id: req.params.id });
});

router.post('/delete/:id', (req, res) => {
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
