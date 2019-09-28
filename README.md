# tfaker.js
## Faking Targaryen data has never been easier. 
![Daenerys Targaryen](https://i.ibb.co/FJcDwz2/Ciwa-MU5-Ws-AAFgdc.jpg)
## !!! WORK IN PROGRESS !!!
[![Build Status](https://travis-ci.org/TheRealBarenziah/tfaker.js.svg?branch=master)](https://travis-ci.org/TheRealBarenziah/tfaker.js)
### Dependencies: 0
### Flavor: "Vanilla"
### Compatibility:
- Node >= 0.10.48

## Import : 
```
var tfaker = require("./tfaker");   // with git clone (absolute path to tfaker/index.js)
var tfaker = require("tfaker");   // with npm (tfaker is in node_modules)   
```
## EZ Tweaks :
Each file in `./content` is named after the method calling it, and is basically an array of content. You can customize any of those methods by just dropping your stuff into the array (you still have to respect the format).

# Methods :
### Targaryens :  
- tfaker.firstName() `// output => "Aegon"`
- tfaker.lastName() `// output => "Targaryen"`
- tfaker.fullName() `// output => "Visenya Targaryen"`
- tfaker.email() `// output => "dragonchan35@dragonstone.wst"`
- tfaker.country() `// output => "Westeros"`
- tfaker.region() `// output => "The Red Waste"`
### Kittens: 
- tfaker.placeKitten() `// display 100px kitten image. output => "http://placekitten.com/100/100"`
Note: this method can also use one or two Integer arguments, translating into width & height in pixels:
```
tfaker.placeKitten(width); // will make a square: tfaker.placeKitten(420); => "http://placekitten.com/420/420"
- tfaker.placeKitten(width, height); // width * height px kittens => "http://placekitten.com/width/height
```
### Utils :
- tfaker.realDate() `// like new Date(last century). output => "Wed Jul 31 1985 00:10:18 GMT+0100(CEST)"`
- tfaker.islamicDate() `// islamic new Date(); output => "Jumuah, 28 Muharram 1441 AH"`
Note: this method accepts either an *adjustment* **Integer** parameter to add or remove days, or a "zif" or "fake" **string** parameter to generate fake past dates:
```
tfaker.islamicDate(1); // returns today +1 day => "Jumuah, 29 Muharram 1441 AH".
tfaker.islamicDate("zif"); // returns random past date within 8O years => "Sabt, 4 Jumadal Ula 1384 AH"
```
*Stumbled upon [this function][6] while searching for lunar calendars for Westeros. Since faker.js doesn't have this feature, I've thought it would be cool to have ([the Valyrian Freehold was very tolerant of other religions][7]).*
#### incoming: 
- TESTS (mandatory§§§)
- image (need cautious datamining)
- city
- date (not settled between pure lunar or hybrid);
- quote (need datamining)
- phrase (need datamining)
- paragraph (need datamining)
- array (need datamining)
- object (cf array)
- number (class having methods having args)
- catapi (min 1 argument: catapi key; returns array of cats. second argument to choose type/api method)
- work on browser compatibility , start ie9 going backwards (setup stable xp vm for automated tests?). Also Netscape
- purge eslint or bother to setup .env devDependencies, optimize etc

#### Why IE6/Netscape  ?
I learned JS with ES6 syntax (which I love), only to realize that you usually can't afford ES6 into your backend. It's actually not that bad: the limited ways of old have me do researches and learn plenty of good stuff about JS and computers. Imo supporting the oldest browsers is the path to even more fun and knowledge. For I know nothing, just like the guy below.

#### Have you heard about Babeljs?
[Babeljs][5] is an awesome, one of a kind library. *thumbs up*
![Jon Snow](https://i.ibb.co/LSGFXR2/dunwanit.png)
#### Issues (jk please do)
![DanyNope](https://i.ibb.co/4Y2wP6Y/danuBad.jpg)
#### Pull Requests
![DanyYay](https://i.ibb.co/R9dYJDr/danyGood.jpg)
### Credits
- [faker.js][1] obviously the main inspiration source. Excellent library that I intend to continue to use in harmony with mine.
- [Dany][2] for the `"bEsT sEaSoN eVEr"` and also best eyebrows.
- [placekitten.com][3] for the awesome free service. Click 'em
- [jeffreylancaster][4] - I intend to try getting the most out of it and ping you when worth.
- [al-habib.info][6] -  I've liked your function for being both concise and digestible.

[1]: https://github.com/marak/Faker.js/
[2]: https://www.instagram.com/emilia_clarke/
[3]: http://placekitten.com/
[4]: https://github.com/jeffreylancaster/game-of-thrones
[5]: https://github.com/babel/babel
[6]: https://www.al-habib.info/islamic-calendar/hijricalendartext.htm
[7]: https://gameofthrones.fandom.com/wiki/Valyrian_religion#In_the_books