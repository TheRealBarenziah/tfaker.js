function Tfaker (){
  var self = this;
  self.firstname = require('./firstname')
  return this;
}

module['exports'] = Tfaker;