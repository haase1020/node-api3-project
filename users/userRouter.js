const express = require('express');
const router = express.Router();
const postRouter = require('../posts/postRouter');
const Users = require('./userDb');
const Posts = require('../posts/postDb');

router.post('/', validateUser, (req, res) => {
    const user = req.body;
    Users.insert(user)
        .then(user => {
            res.status(201).json(user);
        })
        .catch(err => {
            console.log(`Error: ${err}`);
        });
});

router.post('/:id/posts', validateUserId, (req, res) => {
  // do your magic!
const { body } = req;
Posts.insert(body)
.then(post => {
  res.status(200).json(post);
})
.catch(err => {
  console.log(`Error: ${err}`);
});
});

router.get('/',validateUserId, (req, res) => {
  // do your magic!
  Users.get(req.query)
  .then(user => {
    res.status(200).json(user);
  })
  .catch(err => {
    console.log (`Error: ${err}`);
  });
});

router.get('/:id', validateUserId, (req, res) => {
  const { id } = req.params;
  Users.getById(id)
      .then(user => {
          res.status(200).json(user);
      })
      .catch(err => {
          console.log(`Error: ${err}`);
      });
});

router.get('/:id/posts', validateUserId, (req, res) => {
  // do your magic!
  const { id } =req.params;
  Users.getUserPosts(id)
  .then(user => {
    res.status(200).json(user);
  })
  .catch(err => {
    console.log(`Error: ${err}`);
  });
});

router.delete('/:id', validateUserId, (req, res) => {
  // do your magic!
  const { id } = req.params;
  Users.remove(id)
  .then(user => {
    res.status(200).json(user);
  })
  .catch(err => {
    console.log(`Error: ${err}`);
  });
});

router.put('/:id', validateUserId, (req, res) => {
  // do your magic!
  const { id } = req.params;
  const { body } = req;
  Users.update(id,body)
  .then(user => {
    res.status(200).json(user);
  })
  .catch(err => {
    console.log(`Error: ${err}`);
  });
});

//custom middleware

function validateUserId(req, res, next) {
  // do your magic!
  const { id } = req.params;
  Users.getById(id)
  .then(user => {
    if (user) {
      res.user = user
      next()
    } else {
      res.status(400).json({ message: 'Invalid user id' })
    }
  })
  .catch(err => {
    console.log(`Error: ${err}`)
  });
}

function validateUser(req, res, next) {
  // do your magic!
}

function validatePost(req, res, next) {
  // do your magic!
}

module.exports = router;
