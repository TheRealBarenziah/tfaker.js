var assert = require("assert");
var placeKitten = require("../methods/placeKitten.js");

module.exports = exports = function placeKittenTest () {
assert.strictEqual(typeof placeKitten, "function");
assert.strictEqual(typeof placeKitten(), "string");
assert.strictEqual(placeKitten(), "http://placekitten.com/100/100");
assert.strictEqual(placeKitten(400), "http://placekitten.com/400/400");
assert.strictEqual(placeKitten(300, 900), "http://placekitten.com/300/900");
};