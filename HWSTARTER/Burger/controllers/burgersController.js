var express = require("express");

var router = express.Router();
var burger = require("../models/burger.js");
var bodyParser = require('body-parser');
// get route -> index
router.get("/", function(req, res) {
  res.redirect("/burgers");
});

router.get("/burgers", function(req, res) {
  //hint: burger.all
  burger.selectAll(function(data) 
  {
    var hbsObject = { burgers: data };
    //console.log(hbsObject);
    res.render('index', hbsObject);
  });
});

// post route -> back to index
  //hint: burger.create
  router.post('/burger/create', function (req, res) 
  {
    burger.insertOne(req.body.burger_name, function() 
    {
      res.redirect('/index');
    });
  });
  // Devour a Burger
router.post('/burger/eat/:id', function (req, res) 
{
  burger.updateOne(req.params.id, function() 
  {
    res.redirect('/index');
  });
});

// put route -> back to index
  //hint: burger.update()


module.exports = router;
