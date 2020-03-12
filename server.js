const express = require('express');

const helmet =require('helmet')
const usersRouter = require('./users/userRouter')
const postsRouter = require('./posts/postRouter')

const server = express();


server.use(helmet());
server.use(logger); //don't need to invoke
server.use(express.json());

//after going through middleware, goes to routers
server.use('/api/users', usersRouter);
server.use('/api/posts', postsRouter);


server.get('/', (req, res) => {
  res.send(`<h2>Let's write some middleware!</h2>`);
});

//custom middleware

function logger(req, res, next) {
  const method = req.method;
  const endpoint = req.originalUrl;

  console.log(`${method} to ${endpoint}`)
  next();
}

module.exports = server;


//completed by Mandi Haase