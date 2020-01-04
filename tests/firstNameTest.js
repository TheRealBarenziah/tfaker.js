var assert = require("assert");
var firstName = require("../methods/firstName.js");

module.exports = exports = function firstNameTest() {
  assert.strictEqual(typeof firstName, "function");
  assert.strictEqual(typeof firstName(), "string");
};