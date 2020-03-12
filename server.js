const express = require('express');
const morgan =require('morgan') //enable logger middleware
const helmet =require('helmet')


const server = express();


server.use(morgan('short'));



server.get('/', (req, res) => {
  res.send(`<h2>Let's write some middleware!</h2>`);
});

//custom middleware

function logger(req, res, next) {}

module.exports = server;
