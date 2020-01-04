var assert = require("assert");
var email = require("../methods/email.js");

module.exports = exports = function emailTest() {
  var x = email();
  var mailRegex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
  // source of this beauty: RFC2822 (https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript#comment3855831_46181)

  assert.strictEqual(typeof email, "function");
  assert.strictEqual(typeof email(), "string");
  assert.strictEqual(mailRegex.test(x), true);
};
