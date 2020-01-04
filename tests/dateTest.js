var assert = require("assert");
var date = require("../methods/date.js");

module.exports = exports = function dateTest () {
assert.strictEqual(typeof date, "function");t
assert.strictEqual(typeof date(), "object");
assert.strictEqual(typeof date().constructor, "function");
assert.strictEqual(typeof date().getFullYear, "function");
assert.strictEqual(typeof date().getFullYear(), "number");
};