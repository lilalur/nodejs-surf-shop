const express = require('express');
const router = express.Router();
const { postRegister, postLogin, getLogout } = require('../controllers');
const { asyncErrorHandler } = require('../middleware');

// how the flow of the webpage will go
/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Surf Shop - Home' });
});

/* GET /register */
router.get('/register', (req, res, next) => {
  res.send('GET /register');
});

/* POST /register */
router.post('/register', asyncErrorHandler(postRegister));

/* GET /login */
router.get('/login', (req, res, next) => {
  res.send('GET /login');
});

/* POST /login */
router.post('/login', postLogin);

/* GET /logout */
router.get('/logout', getLogout);

/* GET /profile */
router.get('/profile', (req, res, next) => {
  res.send('GET /profile');
});

/* PUT /profile/:user-id */
router.put('/profile/:user_id', (req, res, next) => {
  res.send('PUT /profile/:user_id');
});

/* GET /forgot */
router.get('/forgot', (req, res, next) => {
  res.send('GET /forgot');
});

/* GET /forgot , change the password to a token for the user */
router.put('/forgot', (req, res, next) => {
  res.send('PUT /forgot');
});

/* GET /reset/:token */
router.get('/reset/:token', (req, res, next) => {
  res.send('GET /reset/:token');
});

/* GET /reset/:token */
router.put('/reset/:token', (req, res, next) => {
  res.send('PUT /reset/:token');
});

module.exports = router;
