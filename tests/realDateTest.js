var assert = require("assert");
var realDate = require("../methods/realDate.js");

module.exports = exports = function realDateTest () {
  assert.strictEqual(typeof realDate(), "object");
  var a = realDate();
  var b = new Date();
  if (a == b) throw new Error;
};