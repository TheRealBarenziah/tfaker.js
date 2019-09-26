var assert = require("assert");
var email = require("../methods/email.js");

module.exports = exports = function emailTest () {
assert.strictEqual(typeof email, "function");
assert.strictEqual(typeof email(), "string");
};