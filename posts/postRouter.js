const express = require('express');

const Posts = require('./postDb.js') 
const router = express.Router();

router.get('/', (req, res) => {
  // do your magic!
  Posts.get(req.query)
        .then(post => {
            res.status(200).json(post);
        })
        .catch(err => {
            console.log(`Error: ${err}`);
        });
});


router.get('/:id',validatePostId,(req, res) => {
  // do your magic!
  const { id } = req.params;
    Posts.getById(id)
        .then(post => {
            res.status(200).json(post);
        })
        .catch(err => {
            console.log(`Error: ${err}`);
        });
  
});

router.delete('/:id',validatePostId, (req, res) => {
  // do your magic!
  const { id } = req.params;
    Post.remove(id)
        .then(post => {
            res.status(200).json(post);
        })
        .catch(err => {
            console.log(`Error: ${err}`);
        });
});

router.put('/:id',validatePostId, (req, res) => {
  // do your magic!
  const { id } = req.params;
    const { body } = req;
    Posts.update(id, body)
        .then(post => {
            res.status(200).json(post);
        })
        .catch(err => {
            console.log(`Error: ${err}`);
        });
});

// custom middleware

function validatePostId(req, res, next) {
  // do your magic!
  const { id } = req.params;
    Posts.getById(id)
        .then(post => {
          if (post) {
            req.post = post
            next()
          } else {
            res.status(400).json({ message: 'Invalid post id'})
          }
        })
        .catch(err => {
          console.log(`Error: ${err}`)
        });
}

module.exports = router;
