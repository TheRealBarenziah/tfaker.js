var assert = require("assert");
var lastName = require("../methods/lastName.js");
var lastname = require("../content/lastname.js");


assert.strictEqual(typeof lastName, "function");
assert.strictEqual(typeof lastName(), "string");
assert.strictEqual(lastName(), lastname);
assert.notDeepStrictEqual(lastName(), "Blackfyre");
// Blackfyre supporters are invited to fork </3
