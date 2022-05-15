const express = require('express');

const router = express.Router();

router.get('/new', (req, res) => {
  res.render('../views/create.ejs');
});

router.post('/new', (req, res) => {
  try {
    return res.status(200).json({ message: 'Item Created', success: 'true' });
  } catch (err) {
    return res
      .status(500)
      .json({ message: 'Internal server error', success: 'false' });
  }
});

module.exports = router;
