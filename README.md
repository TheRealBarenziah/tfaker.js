# tfaker.js
## Faking Targaryen data has never been easier. 
![Daenerys Targaryen](https://i.ibb.co/FJcDwz2/Ciwa-MU5-Ws-AAFgdc.jpg)
## !!! WORK IN PROGRESS !!!
[![Build Status](https://travis-ci.org/TheRealBarenziah/tfaker.js.svg?branch=master)](https://travis-ci.org/TheRealBarenziah/tfaker.js)
### Zero dependencies
### Compatibility:
- Node >= 0.10.48

## Import : 
```
var tfaker = require("tfaker");   // with npm (tfaker is in node_modules)   
var tfaker = require("./tfaker");   // with git clone (absolute path to tfaker/index.js)
```
## EZ Tweaks :
Each file in `./content` is named after the method calling it, and is basically an array of content. You can customize any of those methods by simply dropping your stuff into the array (still have to respect the format).

# Methods :
### Targaryens :  
- tfaker.firstName() `// random output => "Aegon"`
- tfaker.lastName() `// output => "Targaryen"`
- tfaker.fullName() `// random output => "Visenya Targaryen"`
- tfaker.email() `// random output => "dragonchan35@dragonstone.wst"`
- tfaker.country() `// random output => "Westeros"`
- tfaker.region() `// random output => "The Red Waste"`
- tfaker.city() `// random output => "Braavos"`
### Kittens: 
- tfaker.placeKitten() `// display 100px kitten image. output => "http://placekitten.com/100/100"`
Note: this method can also use one or two **Integer** arguments, translating into *width* & *height* in pixels:
```
tfaker.placeKitten(420); // one parameter for squares => "http://placekitten.com/420/420"
tfaker.placeKitten(800, 600); // two for width & height => "http://placekitten.com/800/600"
```
### Utils :
- tfaker.realDate() `// like new Date(last century). output => "Wed Jul 31 1985 00:10:18 GMT+0100(CEST)"`
- tfaker.islamicDate() `// islamic new Date(); output => "Jumuah, 28 Muharram 1441 AH"`
Note: this method accepts either an *adjustment* **Integer** parameter, or a *"zif"* or *"fake"* **string** parameter:
```
tfaker.islamicDate(1); // returns islamicDate(1) +1 day => "Jumuah, 29 Muharram 1441 AH".
tfaker.islamicDate("zif"); // returns random past date within 8O years => "Sabt, 4 Jumadal Ula 1384 AH"
```
*Stumbled upon [this function][6] while searching for lunar calendars for Westeros. Since faker.js doesn't have this feature, I've thought it would be cool to have. Afterall [The Valyrian Freehold was very tolerant of other religions][7].*
___
#### incoming: 
- TESTS (mandatory§§§)
- image (need cautious datamining)
- date (not settled between pure lunar or hybrid);
- quote (need datamining)
- phrase (need datamining)
- paragraph (need datamining)
- array (need datamining)
- object (cf array)
- number (having methods having args)
- catapi (samples of array, objects & images fetched on catapi)
- work on browser compatibility , start ie9 going backwards (setup stable xp vm for automated tests?). Also Netscape
- purge eslint or bother to setup .env devDependencies, optimize etc

#### Why IE6/Netscape  ?
I learned JS with ES6 syntax (which I love), only to realize that you usually can't afford ES6 into your backend. It's actually not that bad: the limited ways of old had me do researches and learn good stuff about JS and IT in general. Imo supporting the oldest browsers is the path to even more fun and knowledge. For I know nothing, just like the guy below.

#### Have you heard about Babeljs?
[Babeljs][5] is an awesome, one of a kind library * *thumbs up* *
![Jon Snow](https://i.ibb.co/LSGFXR2/dunwanit.png)
#### Issues (jk please do)
![DanyNope](https://i.ibb.co/4Y2wP6Y/danuBad.jpg)
#### Pull Requests
![DanyYay](https://i.ibb.co/R9dYJDr/danyGood.jpg)
### Credits
- [faker.js][1] obviously the main inspiration source. Excellent library that I intend to continue to use in harmony with mine.
- [Dany][2] for the `"bEsT sEaSoN eVEr"` and also best eyebrows.
- [placekitten.com][3] for the awesome free service. Click 'em
- [jeffreylancaster][4] - This goldmine helped me to parse stuff like cities & regions. Thank you !
- [al-habib.info][6] -  I liked your function for being both concise and digestible.

[1]: https://github.com/marak/Faker.js/
[2]: https://www.instagram.com/emilia_clarke/
[3]: http://placekitten.com/
[4]: https://github.com/jeffreylancaster/game-of-thrones
[5]: https://github.com/babel/babel
[6]: https://www.al-habib.info/islamic-calendar/hijricalendartext.htm
[7]: https://gameofthrones.fandom.com/wiki/Valyrian_religion#In_the_books