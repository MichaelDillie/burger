var express = require("express");

var router = express.Router();

// Importing (burger.js)
var burger = require("../models/burger.js");

router.get("/", function(req, res) {
  burger.all(function(data) {
    var burgerObject = {
      burgers: data
    }
    console.log(burgerObject);
    res.render("index", burgerObject);
  });
});

// router.post("/api/burgers", function(req, res) {
//   burger.create([
//     "burger_name"
//   ], [
//     req.body.burger_name
//   ], function(result) {

//     res.json({ id: result.insertId });
//     // result.insertId is the id in the DB
//   });
// })

module.exports = router;