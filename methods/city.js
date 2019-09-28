var rand = require("../methods/utils/getRandomElementFromArray.js");
var cities = require("../content/cities.js");

module.exports = exports = function country () {
  return rand(cities);
};