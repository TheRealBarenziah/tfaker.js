var rand = require("../methods/utils/getRandomElementFromArray.js");
var emails = require("../content/emails.js");

module.exports = exports = function email () {
  var random = Math.floor(Math.random() * 99) + 1;
  var randomWord = rand(emails.words);
  var randomDomain = rand(emails.domains);

  var haxzor = function (string) {
    var charArray = [];
    for (var i = 0; i < string.length; i++){
      if (i % 2 == 0) {
        charArray.push(string[i].toUpperCase());
      }
      else charArray.push(string[i]);
    }
    return charArray.join("");
  };

  if ( ( 0 < random ) && ( random <= 25 ) ) {
    return "xXx_" + haxzor(randomWord) + Math.floor((random / 10) + 2) + "_xXx" + randomDomain;
  }
  if ( ( 25 < random ) && ( random <= 50 ) ) {
    return randomWord + "chan" + random + randomDomain;
  }
  if ( ( 50 < random ) && ( random <= 75 ) ) {
    return "uwu" + randomWord + "qt" + Math.floor(random / 10) + "uwu" + randomDomain;
  }
  else return randomWord + random + randomDomain;
};