var assert = require("assert");
var dragon = require("../methods/dragon.js");

module.exports = exports = function dragonTest() {
  assert.strictEqual(typeof dragon, "function");
  assert.strictEqual(typeof dragon(), "string");
};