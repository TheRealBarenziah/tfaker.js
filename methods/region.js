var rand = require("../methods/utils/getRandomElementFromArray.js");
var regions = require("../content/regions.js");

module.exports = exports = function region () {
  return rand(regions);
};