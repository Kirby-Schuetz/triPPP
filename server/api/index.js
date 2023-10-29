const express = require('express');

const router = express.Router();

// GET /api/triPPP
router.get('/', async (req, res) => {
  try {
    res.send('OK');
  } catch (error) {
    console.log(error);
  }
});

// ROUTER: api/users
router.use('/users', require('./users'));

module.exports = router;
