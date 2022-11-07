var express = require("express");
var router = express.Router();

// requiring models
var Chat = require("../models/chat");
var Message = require("../models/message");

// create a new chat
router.post("/", function (req, res, next) {
  Chat.create(req.body)
  .then((chat) => {
    console.log("Successfully added chat", chat);
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.json(Chat);
  }, (err) => {next(err)})
  .catch((err) => next(err))
});

//send a message
router.post("/message", function (req, res, next) {
  Message.create(req.body)
  .then((msg) => {
    console.log("Successfully added message", msg);
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.json(msg);
  }, (err) => {next(err)})
  .catch((err) => next(err))
});

//user update a message
router.put("/message/:id", function(req, res, next){
  Message.findOneAndUpdate({_id: req.params.id}, 
    { text: req.body.text}, 
    function(err, result){
    if (err) {
      return next(err)
    }
    // result
    res.json(result)
  })
});

//user delete a message
router.delete("/message/:id", function(req, res, next){
  Message.deleteOne({_id: req.params.id}, function(err, result){
    if (err){
      return next(err)
    }
    // result
    res.json(result)
  })
});

//update message status
router.patch("/message/:id", function(req, res, next){
  Message.findOneAndUpdate({_id: req.params.id}, 
    { status: true }, 
    function(err, result){
    if (err) {
      return next(err)
    }
    // result
    res.json(result)
  })
});

module.exports = router;
