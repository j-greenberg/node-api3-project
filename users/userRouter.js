const express = require('express');

const router = express.Router();

const Hubs = require("./userDb.js"); 

router.post('/', validateUser, (req, res) => {
  // do your magic!
  
  Hubs.insert(req.body)
  .then(resource => {
    console.log("New resource: ", resource);
    res.status(201).json(resource); 
  })
  .catch(err => {
    console.log("Error in creating new user: ", err); 
    res.status(400).json({ error: err})
  })
});

router.post('/:id/posts', (req, res) => {
  // do your magic!
});

router.get('/', (req, res) => {
  // do your magic!
});

router.get('/:id', validateUserId, (req, res) => {
  // do your magic!
  const user = req.user; 
  const { id, name } = req.user; 

  console.log(`Id is ${id}, User is ${name}`);
  res.status(201).json(user); 
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
  const { id } = req.params; 
  console.log("This is the ID: ", id); 

  Hubs.getById(id)
    .then(response => {
      if(response){
        console.log("user is found"); 
        req.user = response;          
        next(); 
      } else {
        res.status(404).json({ message: "user id not found!" }); 
      }
    })
    .catch(err => {
      console.log(err); 
      res.status(500).json({ message: "failed", err }); 
    })
}


function validateUser(req, res, next) {
  // do your magic!
  console.log("Validate User: ", req.body)

  if(req.body){
    if(req.body.name){
      next(); 
    } else {
      res.status(400).json({ message: "missing required name field" })
    }
  } else{
      res.status(400).json({ message: "missing required user data" });     
  } 
}

function validatePost(req, res, next) {
  // do your magic!
}

module.exports = router;
