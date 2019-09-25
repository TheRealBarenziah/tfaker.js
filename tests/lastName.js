"use strict";
var assert = require("assert");
var lastName = require("../methods/lastName.js");
var lastname = require("../content/lastname.js");


assert.strictEqual(typeof lastName, "function");
assert.strictEqual(typeof lastName(), "string");
assert.strictEqual(lastName(), lastname);
assert.notStrictEqual(lastName(), "Blackfyre");
// Blackfyre supporting === fork
