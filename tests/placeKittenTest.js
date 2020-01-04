var assert = require("assert");
var placeKitten = require("../methods/placeKitten.js");

module.exports = exports = function placeKittenTest() {
  var k = placeKitten("{'foo':'bar'}");
  var x = placeKitten().split("/")[3];
  var y = placeKitten().split("/")[4];

  assert.strictEqual(typeof placeKitten, "function");
  assert.strictEqual(typeof placeKitten(), "string");
  assert.strictEqual(typeof x, "number");
  assert.strictEqual(typeof y, "number");
  assert.strictEqual(typeof placeKitten(function (i) { return --i; }), "string");
  assert.strictEqual(typeof placeKitten("{'foo':'bar'}"), "string");
  assert.strictEqual(typeof placeKitten({ "foo": "bar" }), "string");

  assert.strictEqual(k, "http://placekitten.com/100/100");
  assert.strictEqual(placeKitten(400), "http://placekitten.com/400/400");
  assert.strictEqual(placeKitten(300, 900), "http://placekitten.com/300/900");
};
