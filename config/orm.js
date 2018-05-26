var connection = require("../config/connection.js");

var orm = {
  // Select All
  all: function(table,cb) {
    var queryString = "SELECT * FROM " + table + ";";
    connection.query(queryString, function(err, result) {
      if (err) throw err;
      cb(result);
    });
  }
  // Insert One

  // Update One
  
};

module.exports = orm;