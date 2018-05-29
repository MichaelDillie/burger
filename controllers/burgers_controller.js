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
});

router.put("/burgers/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  burger.update({
    devoured: true
  }, condition, function(result) {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.redirect("/");
      res.status(200).end();
    }
  });
});

module.exports = router;