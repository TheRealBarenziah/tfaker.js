var assert = require("assert");
var islamicDate = require("../methods/islamicDate.js");

module.exports = exports = function islamicDateTest() {
  var x = islamicDate();
  var y = islamicDate(1);
  var a = islamicDate().split(" ")[parseInt(0, 10)];
  var b = islamicDate(1).split(" ")[parseInt(0, 10)];

  assert.strictEqual(typeof islamicDate, "function");
  assert.strictEqual(typeof x, "string");
  assert.strictEqual(typeof y, "string");
  assert.strictEqual(typeof a, "string");
  assert.strictEqual(typeof b, "string");
  assert.strictEqual(typeof islamicDate("zif"), "string");
  assert.strictEqual(typeof islamicDate("fake"), "string");
  assert.notStrictEqual(x, y);
  assert.notStrictEqual(typeof islamicDate(";eval('alert(!![])')"), "undefined");
};