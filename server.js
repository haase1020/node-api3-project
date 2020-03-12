const express = require('express');

const helmet =require('helmet')
const usersRouter = require('./users/userRouter')
const postsRouter = require('./posts/postRouter')

const server = express();

//global middleware
server.use(helmet());
server.use(logger); //don't need to invoke/just pass logger
server.use(express.json());// built in middleware: no need to install

//after going through middleware, goes to routers
server.use('/api/users', usersRouter);
server.use('/api/posts', postsRouter);

//route handler
server.get('/', (req, res) => {
  res.send(`<h2>Let's write some middleware!</h2>`);
});

//custom middleware// use the three amigas
//logger logs information about the request to the console
function logger(req, res, next) {
  const method = req.method;
  const endpoint = req.originalUrl;

  console.log(`${method} to ${endpoint}`)
  next();    //moves the request to next middleware
}

module.exports = server;


//completed by Mandi Haase