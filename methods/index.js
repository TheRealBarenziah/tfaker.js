function Tfaker (){
  var self = this;
  self.firstname = require("./firstname");
  self.lastname = require("./lastname");
  self.fullname = require("./fullname");

  self.region = require("./region");

  return this;
}

module["exports"] = Tfaker;