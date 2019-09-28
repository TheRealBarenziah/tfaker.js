var assert = require("assert");
var city = require("../methods/city.js");

module.exports = exports = function cityTest () {
assert.strictEqual(typeof city, "function");
assert.strictEqual(typeof city(), "string");
};