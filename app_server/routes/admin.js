var express = require("express");
var router = express.Router();

// requiring models
var Service = require("../models/service");

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
  Service.findOneAndUpdate({_id: req.params.id}, {detail: req.body.detail}, function(err, result){
    if (err){
      return next(err)
    }
    // result
    res.json(result)
  })
});

module.exports = router;
