var assert = require("assert");
var firstName = require("../methods/firstName.js");
var lastName = require("../methods/lastName.js");

module.exports = exports = function fullNameTest() {
  assert.strictEqual(typeof firstName, "function");
  assert.strictEqual(typeof firstName(), "string");
  assert.strictEqual(typeof lastName, "function");
  assert.notStrictEqual(lastName(), "Blackfyre");
  assert.strictEqual((function () {
    var fullname = firstName() + " " + lastName();
    if (typeof fullname === "string") {
      return true;
    }
    else {
      return false;
    }
  })(), true);
};