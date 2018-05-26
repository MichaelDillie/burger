var express = require("express");

var router = express.Router();

// Importing (burger.js)
var burger = require("../models/burger.js");

router.get("/", function(req, res) {
  burger.all(function(data) {
    var testObject = {
      burgers: data
    }

    res.render("index", testObject);
  });
});

module.exports = router;