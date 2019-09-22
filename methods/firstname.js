var rand = require("../methods/utils/getRandomElementFromArray.js");
var firstnames = require("../content/firstnames.js");

module.exports = exports = function firstname () {
  return rand(firstnames);
};