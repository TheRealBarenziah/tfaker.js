function Tfaker (){
  var self = this;
  self.firstname = require("./firstname.js");
  self.lastname = require("./lastname.js");
  self.fullname = require("./fullname.js");
  self.email = require("./email.js");

  self.region = require("./region.js");

  return this;
}

module["exports"] = Tfaker;