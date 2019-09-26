var firstNameTest = require('./firstNameTest.js');
var lastNameTest = require('./lastNameTest.js');
var fullNameTest = require('./fullNameTest.js');
var realDateTest = require('../tests/realDateTest.js');
var placeKittenTest = require('../tests/placeKittenTest.js');
var countryTest = require('../tests/countryTest.js');
var emailTest = require('../tests/emailTest.js');
var regionTest = require('../tests/regionTest.js');
var dateTest = require('../tests/dateTest.js');

var tests = function() {
  firstNameTest();
  lastNameTest();
  fullNameTest();
  realDateTest();
  placeKittenTest();
  countryTest();
  emailTest();
  regionTest();
  dateTest();
};

tests();