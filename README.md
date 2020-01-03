# tfaker.js
## Faking Targaryen data has never been easier
![Daenerys Targaryen](https://i.ibb.co/FJcDwz2/Ciwa-MU5-Ws-AAFgdc.jpg)
## !!! WORK IN PROGRESS !!!
[![https://nodei.co/npm/tfaker.png?downloads=true&downloadRank=true&stars=true](https://nodei.co/npm/tfaker.png?downloads=true&downloadRank=true&stars=true)](https://www.npmjs.com/package/tfaker)
[![Build Status](https://travis-ci.org/TheRealBarenziah/tfaker.js.svg?branch=master)](https://travis-ci.org/TheRealBarenziah/tfaker.js)
![GitHub repo size](https://img.shields.io/github/repo-size/TheRealBarenziah/tfaker.js)
[![Known Vulnerabilities](https://snyk.io/test/github/TheRealBarenziah/tfaker.js/badge.svg?targetFile=package.json)](https://snyk.io/test/github/TheRealBarenziah/tfaker.js?targetFile=package.json)
![NPM](https://img.shields.io/npm/l/tfaker)
[![CodeFactor](https://www.codefactor.io/repository/github/therealbarenziah/tfaker.js/badge)](https://www.codefactor.io/repository/github/therealbarenziah/tfaker.js)

### Zero dependencies
### Compatibility
-  **Node >= 0.10.48**  
*NB: [node.green][8] is lying about 0.10.48 not supporting `parseInt()`. If doubting, please `nvm use 0.10.48` and check for yourself.*

## Import
```javascript
var tfaker = require("tfaker");   // with npm (tfaker is in node_modules)   
var tfaker = require("./tfaker");   // with git clone (absolute path to tfaker/index.js)
```
# Methods
## Targaryens
-  tfaker.firstName() `// random output => "Aegon"`
-  tfaker.lastName() `// output => "Targaryen"`
-  tfaker.fullName() `// random output => "Visenya Targaryen"`
-  tfaker.email() `// random output => "dragonchan35@dragonstone.wst"`
-  tfaker.country() `// random output => "Westeros"`
-  tfaker.region() `// random output => "The Red Waste"`
-  tfaker.city() `// random output => "Braavos"`
## Kittens
-  tfaker.placeKitten() `// display 100px kitten image. output => "http://placekitten.com/100/100"`
Note: this method can also use one or two **Integer** arguments, translating into *width* & *height* in pixels:
```javascript
tfaker.placeKitten(420); // one parameter for squares => "http://placekitten.com/420/420"
tfaker.placeKitten(800, 600); // two for width & height => "http://placekitten.com/800/600"
```
## Utils
-  tfaker.realDate() `// like new Date(last century). output => "Wed Jul 31 1985 00:10:18 GMT+0100(CEST)"`
-  tfaker.islamicDate() `// islamic new Date(); output => "Jumuah, 28 Muharram 1441 AH"`
**NB**: this method accepts either an *adjustment* **Integer** parameter, or a *"zif"* or *"fake"* **string** parameter:
```javascript
tfaker.islamicDate(1); // returns islamicDate(1) +1 day => "Jumuah, 29 Muharram 1441 AH".
tfaker.islamicDate("zif"); // returns random past date within 8O years => "Sabt, 4 Jumadal Ula 1384 AH"
```
*Stumbled upon [this function][6] while searching for lunar calendars for Westeros. Since faker.js doesn't have this feature, I've thought it would be cool to have. Afterall [The Valyrian Freehold was very tolerant of other religions][7].*
___
# EZ Tweaks
Each file in `./content` is named after the method calling it and is basically an array of content. You can customize any of those methods simply by dropping your stuff into the array (as long as you respect the format).
___
## F.A.Q
### Have you heard about Babeljs ?
[Babeljs][5] is an awesome, one of a kind library * *thumbs up* *
![Jon Snow](https://i.ibb.co/LSGFXR2/dunwanit.png)
### Issues (jk! if anything PLEASE DO)
![DanyNope](https://i.ibb.co/4Y2wP6Y/danuBad.jpg)
### Pull Requests
![DanyYay](https://i.ibb.co/R9dYJDr/danyGood.jpg)
### What's next ?
`./TODO.md`

## Credits
-  [faker.js][1] obviously the main inspiration source. Excellent library that I intend to continue to use in harmony with mine.
-  [Dany][2] for the `"bEsT sEaSoN eVEr"` and also best eyebrows.
-  [placekitten.com][3] for the awesome free service. Click 'em
-  [jeffreylancaster][4] - This goldmine helped me to parse stuff like cities & regions. Thank you !
-  [al-habib.info][6] -  I liked your function for being both concise and digestible.

[1]: https://github.com/marak/Faker.js/
[2]: https://www.instagram.com/emilia_clarke/
[3]: http://placekitten.com/
[4]: https://github.com/jeffreylancaster/game-of-thrones
[5]: https://github.com/babel/babel
[6]: https://www.al-habib.info/islamic-calendar/hijricalendartext.htm
[7]: https://gameofthrones.fandom.com/wiki/Valyrian_religion#In_the_books
[8]: https://node.green/#ES2015-built-in-extensions-Number-properties-Number-parseInt