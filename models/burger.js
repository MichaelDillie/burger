var orm = require("../config/orm.js");

var burger = {
  all: function(cb) {
    orm.all("burgers", function(res) {
      cb(res);
    });
  },

  // create: function(cb) {
  //   orm.create("burgers", col, val, function(res) {
  //     // col is the column name (burger_name)
  //     // val is the value that was inserted by user
  //     cb(res);
  //   });
  // }
};

module.exports = burger;