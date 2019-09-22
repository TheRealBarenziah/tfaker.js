/* eslint-disable */
let gotchars = require("./characters.json");
let chardata = gotchars.characters;

let targsObjects = chardata.filter(obj => obj.houseName === "Targaryen");

const isATarg = (fullname) => {
  if (typeof fullname === "string") fullname.split(" ").includes("Targaryen") ? true : false;
  else console.log("TypeError, typeof fullname = ", typeof fullname);
};

let gotquotes = require("./script-bag-of-words.json");
let onlyQuotes = gotquotes.map(obj => obj.text);

//onlyQuotes.filter(obj => isATarg(obj.name)

let places = require("./places.json");
console.log(places.regions.map(obj => obj.location));