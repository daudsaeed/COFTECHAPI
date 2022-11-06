var express = require('express');
var router = express.Router();

// requiring models
var Service = require("../models/service");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

//services routes
// view all services
router.get('/services', function(req, res, next){
  Service.find().sort('_id').exec(function(error, results) {
    if (error) {
        return next(error);
    }
    // displaying the result
    res.json(results);
  })
});
// view one service
router.get('/service/:id', function(req, res, next){
  Service.findById(req.params.id)
  .then((service) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json(service);
  })
  .catch((err) => next(err))
});

module.exports = router;
