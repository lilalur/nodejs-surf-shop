const express = require('express');
const router = express.Router();

// how the flow of the webpage will go
/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Surf Shop - Home' });
});

module.exports = router;
