var assert = require("assert");
var realDate = require("../methods/realDate.js");

module.exports = exports = function realDateTest () {
  assert.strictEqual(typeof realDate(), "object");
  assert.strictEqual(typeof realDate().constructor, "function");
  assert.strictEqual(typeof realDate().getFullYear, "function");
  assert.strictEqual(typeof realDate().getFullYear(), "number");
  assert.notStrictEqual(typeof realDate(1), "undefined");
  assert.notStrictEqual(typeof realDate("string"), "undefined");
};