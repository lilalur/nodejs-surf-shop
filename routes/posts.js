const express = require('express');
const router = express.Router();
const { asyncErrorHandler } = require('../middleware');
const { postIndex, postNew, postCreate, postShow, postEdit, postUpdate } = require('../controllers/posts');

/* GET posts index /posts. */
router.get('/', asyncErrorHandler(postIndex));
  
//   GET new           /posts/new  ! always put the new route before the SHOW route
router.get('/new', postNew);

//   POST create       /posts
router.post('/', asyncErrorHandler(postCreate));

//   GET show          /posts/:id
router.get('/:id', asyncErrorHandler(postShow));

//   GET edit          /posts/:id/edit
router.get('/:id/edit', asyncErrorHandler(postEdit));

//   PUT update        /posts/:id
router.put('/:id', asyncErrorHandler(postUpdate));

//   DELETE destroy    /posts/:id
router.delete('/:id', (req, res, next) => {
    res.send(' DELETE /posts/:id');
  });

  module.exports = router;

// testing the route with postman