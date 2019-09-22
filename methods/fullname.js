var firstname = require("./firstname.js");
var lastname = require("../content/lastname.js");

module.exports = exports = function fullname () {
  return firstname() + " " + lastname;
};