var assert = require("assert");
var country = require("../methods/country.js");

module.exports = exports = function countryTest() {
  assert.strictEqual(typeof country, "function");
  assert.strictEqual(typeof country(), "string");
};