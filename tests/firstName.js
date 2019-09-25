"use strict";
var assert = require("assert");
var firstName = require("../methods/firstName.js");
var firstnames = require("../content/firstnames.js");


assert.strictEqual(typeof firstName, "function");
assert.strictEqual(typeof firstName(), "string");
for (var i = 0; i < firstnames.length * 9001; i++) {
  assert.notDeepEqual(firstName(), firstName());
}

