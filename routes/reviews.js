const express = require('express');
const router = express.Router({ mergeParams: true });

/* GET reviews index /posts/:id/reviews */
router.get('/', (req, res, next) => {
    res.send('INDEX /posts/:id/reviews');
  });
  
//   GET reviews new  /posts/:id/reviews/new  ! always put the new route before the SHOW route
// router.get('/new', (req, res, next) => {
//     res.send('NEW /posts/:id/reviews/new');
//   });
// NO NEED SEPERATE SHEET

//   POST create       /posts/:id/reviews
router.post('/', (req, res, next) => {
    res.send('CREATE /posts/:id/reviews');
  });

//   GET show          /posts/:id/reviews/:review_id
// router.get('/:review_id', (req, res, next) => {
//     res.send('SHOW /posts/:id/reviews/:review_id');
//   });
// no need separate SHOW PAGE


//   GET edit          /posts/:id/reviews/:review_id/edit
router.get('/:review_id/edit', (req, res, next) => {
    res.send('EDIT /posts/:id/reviews/:review_id/edit');
  });

//   PUT update        /posts/:id/reviews/:review_id
router.put('/:review_id', (req, res, next) => {
    res.send('UPDATE /posts/:id/reviews/:review_id');
  });

//   DELETE destroy    /posts/:id/reviews/:review_id
router.delete('/:review_id', (req, res, next) => {
    res.send(' DELETE /posts/:id/reviews/:review_id');
  });


  module.exports = router;

// testing the route with postman