var express = require("express");

var router = express.Router();

// Importing (burger.js)
var burger = require("../models/burger.js");

router.get("/", function(req, res) {
  burger.all(function(data) {
    var burgerObject = {
      burgers: data
    }
    // console.log(burgerObject);
    res.render("index", burgerObject);
  });
});

router.post("/burgers", function(req, res) {
  burger.create([
    "burger_name"
  ], [
    req.body.burger_name
  ], function(result) {
    // Redirecting back to home
    res.redirect("/");
  });
})

module.exports = router;