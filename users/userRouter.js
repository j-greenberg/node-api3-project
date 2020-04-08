const express = require('express');

const userDb = require("./userDb.js"); 

const router = express.Router();

router.use(validateUserId); 

router.post('/', (req, res) => {
  // do your magic!
});

router.post('/:id/posts', (req, res) => {
  // do your magic!
});

router.get('/', (req, res) => {
  // do your magic!
});

router.get('/:id', (req, res) => {
  // do your magic!
});

router.get('/:id/posts', (req, res) => {
  // do your magic!
});

router.delete('/:id', (req, res) => {
  // do your magic!
});

router.put('/:id', (req, res) => {
  // do your magic!
});

//custom middleware

function validateUserId(req, res, next) {
  // do your magic!
  userDb
  .getById(req.params.id)
  .then(response => {
    if(response){
      console.log("user is found"); 
      console.log(response); 
      req.user = response;          
      next(); 
    } else {
      console.log("User is not found"); 
    }
  })
  .catch(error => {
    console.log(error); 
    res.status(400).json({ message: "invalid user id" }); 
  })
}


function validateUser(req, res, next) {
  // do your magic!

}

function validatePost(req, res, next) {
  // do your magic!
}

module.exports = router;
