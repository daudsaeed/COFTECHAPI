var express = require("express");
var router = express.Router();

// requiring models
var Service = require("../models/service");
var Product = require("../models/product");
var Package = require("../models/package");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Admin Page" });
});

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
router.get("/packages", function (req, res, next) {
  Package.find().exec(function (error, results) {
    if (error) {
      return next(error);
    }
    res.json(results);
  });
});
router.get("/package/:id", function (req, res, next) {
  Package.findById(req.params.id)
    .then((package) => {
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json");
      res.json(package);
    })
    .catch((err) => next(err));
});
router.post("/addpackage", function (req, res, next) {
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
router.delete("/delpackage/:id", function (req, res, next) {
  Package.deleteOne({ _id: req.params.id }, function (error, results) {
    if (error) {
      return next(error);
    }
    // Respond with valid data
    res.json(results);
  });
});

module.exports = router;
