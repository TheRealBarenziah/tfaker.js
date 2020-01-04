var assert = require("assert");
var date = require("../methods/date.js");

module.exports = exports = function dateTest () {
assert.strictEqual(typeof date, "function");
assert.strictEqual(typeof date(), "string");
};