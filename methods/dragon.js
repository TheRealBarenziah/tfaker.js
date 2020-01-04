var rand = require("../methods/utils/getRandomElementFromArray.js");
var dragons = require("../content/dragons.js");

module.exports = exports = function dragon () {
  return rand(dragons);
};