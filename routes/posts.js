const express = require('express');
const router = express.Router();
const { errorHandler } = require('../middleware');
const { getPosts } = require('../controllers/posts');


/* GET posts index /posts. */
router.get('/', errorHandler(getPosts));
  
//   GET new           /posts/new  ! always put the new route before the SHOW route
router.get('/new', (req, res, next) => {
    res.send('/posts/new');
  });

//   POST create       /posts
router.post('/', (req, res, next) => {
    res.send('CREATE /posts');
  });

//   GET show          /posts/:id
router.get('/:id', (req, res, next) => {
    res.send('SHOW /posts/:id');
  });

//   GET edit          /posts/:id/edit
router.get('/:id/edit', (req, res, next) => {
    res.send('EDIT /posts/:id/edit');
  });

//   PUT update        /posts/:id
router.put('/:id', (req, res, next) => {
    res.send('UPDATE /posts/:id');
  });

//   DELETE destroy    /posts/:id
router.delete('/:id', (req, res, next) => {
    res.send(' DELETE /posts/:id');
  });


  module.exports = router;

// testing the route with postman