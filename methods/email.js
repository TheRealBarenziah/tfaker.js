var rand = require("../methods/utils/getRandomElementFromArray.js");
var emails = require("../content/emails.js");
var dragons = require("../content/dragons.js");

module.exports = exports = function email () {
  var random = Math.floor(Math.random() * 99) + 1;
  var randomWord = rand(emails.words);
  var randomDomain = rand(emails.domains);
  var randomDragon = rand(dragons);

  var haxzor = function (string) {
    var charArray = [];
    for (var i = 0; i < string.length; i++){
      if (i % 2 === 0) {
        charArray.push(string[parseInt(i, 10)].toUpperCase());
      }
      else {
        charArray.push(string[parseInt(i, 10)]);
      }
    }
    return charArray.join("");
  };

  if ( ( 0 < random ) && ( random <= 20 ) ) {
    return "xXx_" + haxzor(randomWord) + Math.floor((random / 10) + 2) + "_xXx" + randomDomain;
  }
  if ( ( 20 < random ) && ( random <= 40 ) ) {
    return randomWord + "chan" + random + randomDomain;
  }
  if ( ( 40 < random ) && ( random <= 60 ) ) {
    return randomDragon + Math.floor((random / 10) + 1) + randomDomain;
  }
  if ( ( 60 < random ) && ( random <= 80 ) ) {
    return "uwu" + randomWord + "qt" + Math.floor(random / 10) + randomDomain;
  }
  else {
    return randomWord + random + randomDomain;
  }
};