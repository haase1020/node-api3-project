const express = require('express');

const Posts = require('./postDb.js') ///research what this does
const router = express.Router();

// router.get('/', (req, res) => {
//   // do your magic!
//   Posts.get()
//   .then(post => {
//     res.status(200).json(post)
//   })
//   .catch(err => {
//     res.status(500).json({error: "unable to retrieve posts"})
//   })
// });

router.get('/:id', (req, res) => {
  // do your magic!
});

router.delete('/:id', (req, res) => {
  // do your magic!
});

router.put('/:id', (req, res) => {
  // do your magic!
});

// custom middleware

function validatePostId(req, res, next) {
  // do your magic!
}

module.exports = router;
