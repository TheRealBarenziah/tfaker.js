function Tfaker (){
  var self = this;
  self.firstName = require("./firstName.js");
  self.lastName = require("./lastName.js");
  self.fullName = require("./fullName.js");
  self.email = require("./email.js");
  self.country = require("./country.js");
  self.city = require("./city.js");
  self.region = require("./region.js");

  self.placeKitten = require("./placeKitten.js");

  self.realDate = require("./realDate.js");
  self.islamicDate = require("./islamicDate.js");

  return this;
}

module["exports"] = Tfaker;