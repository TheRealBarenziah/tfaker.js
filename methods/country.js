var rand = require("../methods/utils/getRandomElementFromArray.js");
var countries = require("../content/countries.js");

module.exports = exports = function country () {
  return rand(countries);
};