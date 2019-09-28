var assert = require("assert");
var islamicDate = require("../methods/islamicDate.js");

module.exports = exports = function islamicDateTest () {
assert.strictEqual(typeof islamicDate, "function");
assert.strictEqual(typeof islamicDate(), "string");
// "fake" day of week should be correct for the random past date
// other strings than fake/zif don't return undefined 
};

console.log(islamicDate("zif"))