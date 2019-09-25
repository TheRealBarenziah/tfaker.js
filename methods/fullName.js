var firstName = require("./firstName.js");
var lastName = require("../content/lastname.js");

module.exports = exports = function fullName () {
  return firstName() + " " + lastName;
};