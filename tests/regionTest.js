var assert = require("assert");
var region = require("../methods/region.js");

module.exports = exports = function regionTest () {
assert.strictEqual(typeof region, "function");
assert.strictEqual(typeof region(), "string");
};