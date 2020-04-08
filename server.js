const express = require('express'); 

const server = express();

const userRouter = require("./users/userRouter.js"); 
const postRouter = require("./posts/postRouter.js"); 

const userDb = require("./users/userDb"); 

server.use(logger); 
server.use("/users", userRouter); 
server.use("/posts", postRouter); 

server.use(express.json());

//custom middleware

server.get('/', (req, res) => {
  res.send(`<h2>Let's write some middleware!</h2>`);
});

function logger(req, res, next) {
  
  userDb.get()
  .then(response => {
    console.log(response); 
  })
  .catch(error => {
    console.log(error); 
  }); 

  console.log(`Method: ${req.method}`); 
  console.log(`Original URL: ${req.originalUrl}`); 
  console.log(`URL: ${req.url}`);
  console.log(`Timestamp: ${new Date().toTimeString()}`);
  next(); 
}

module.exports = server;