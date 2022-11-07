var express = require("express");
var router = express.Router();

// requiring models
var Service = require("../models/service");
var Product = require("../models/product");
var Package = require("../models/package");
var User = require("../models/user");
var Customer = require("../models/customer");
var Chat = require("../models/chat");
var Message = require("../models/message");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Admin Page" });
});


// adding a user / customer 
router.post("/customer", function (req, res, next) {
  User.create({
    user_type: req.body.user_type,
  })
    .then(
      (user) => {
        console.log("User created", user);
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.json(user);
        return user._id;
      },
      (err) => next(err)
    )
    .then((uid) => {
      Customer.create({
        name: req.body.name,
        user_id: uid,
      });
    });
});

//adding an admin user
// router.post("/user", function (req, res, next) {
//   User.create(req.body)
//   .then((user) => {
//     console.log("User added", user);
//     res.statusCode = 200;
//     res.setHeader("Content-Type", "application/json");
//     res.json(user);
//   }, (err) => {next(err)})
//   .catch((err) => next(err))
// });

// services
// add a service
router.post("/service", function (req, res, next) {
  Service.create(req.body)
  .then((service) => {
    console.log("Service added", service);
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.json(service);
  }, (err) => {next(err)})
  .catch((err) => next(err))
});
// delete a service
router.delete("/service/:id", function(req, res, next){
  Service.deleteOne({_id: req.params.id}, function(err, result){
    if (err){
      return next(err)
    }
    // result
    res.json(result)
  })
});
//update a service
router.put("/service/:id", function(req, res, next){
  Service.findOneAndUpdate(
    {_id: req.params.id}, 
    {detail: req.body.detail, name: req.body.name}, 
    function(err, result){
    if (err) {
      return next(err)
    }
    // result
    res.json(result)
  })
});

// products
// add a product
router.post("/product", function (req, res, next) {
  Product.create(req.body)
  .then((product) => {
    console.log("Product added", product);
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.json(product);
  }, (err) => {next(err)})
  .catch((err) => next(err))
});
// delete a product
router.delete("/product/:id", function(req, res, next){
  Product.deleteOne({_id: req.params.id}, function(err, result){
    if (err){
      return next(err)
    }
    // result
    res.json(result)
  })
});
//update a service
router.put("/product/:id", function(req, res, next){
  Product.findOneAndUpdate({_id: req.params.id}, 
    { name: req.body.name, detail: req.body.detail, service: req.body.service}, 
    function(err, result){
    if (err) {
      return next(err)
    }
    // result
    res.json(result)
  })
});

// mahnoor part => packages
// add package
router.post("/package", function (req, res, next) {
  Package.create(req.body)
    .then(
      (package) => {
        console.log("Package has been Added ", package);
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.json(package);
      },
      (err) => next(err)
    )
    .catch((err) => next(err));
});
// update package
router.put("/package/:id", function (req, res, next) {
  Package.findOneAndUpdate(
    { _id: req.params.id },
    { name: req.body.name },
    function (error, results) {
      if (error) {
        return next(error);
      }
      // Respond with valid data
      res.json(results);
    }
  );
});
// delete package
router.delete("/package/:id", function (req, res, next) {
  Package.deleteOne({ _id: req.params.id }, function (error, results) {
    if (error) {
      return next(error);
    }
    // Respond with valid data
    res.json(results);
  });
});

// fatima anwar part
//admin view all chats
router.get('/chats', function(req, res, next){
  Chat.find().sort('_id')
  .populate("cid")
  .exec(function(error, results) {
    if (error) {
        return next(error);
    }
    // displaying the result
    res.json(results);
  })
});

//admin view one chat
router.get('/chat/:id', function(req, res, next){
  Chat.findById(req.params.id)
  .populate("cid")
  .then((chat) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json(chat);
  })
  .catch((err) => next(err))
});

module.exports = router;
