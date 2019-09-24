# tfaker.js
## Faking Targaryen data has never been easier. 
![Daenerys Targaryen](https://i.ibb.co/FJcDwz2/Ciwa-MU5-Ws-AAFgdc.jpg)
### !!! WORK IN PROGRESS !!!
##### Compatibility:
- Node >= 0.10.48

## Import : 
```
var tfaker = require("./tfaker");   // with git clone (absolute path to tfaker/index.js)
var tfaker = require("tfaker");   // with npm (tfaker is in node_modules)   
```
## EZ Tweaks :
Files in `./content` contains the arrays that most methods randomize. To add your own content, just edit the array named after the method.

## Targaryen ethods : 
- tfaker.firstname() `// output => "Aegon"`
- tfaker.lastname() `// output => "Targaryen"`
- tfaker.fullname() `// output => "Visenya Targaryen"`
- tfaker.email() `// output => "dragonchan35@dragonstone.wst"`

- tfaker.country() `// output => "Westeros"`
- tfaker.region() `// output => "The Red Waste"`
## Kittens methods: 
- tfaker.placekitten() `// display 100px kitten image. output => "http://placekitten.com/100/100"`
- tfaker.placekitten(width) `// width is type integer; display w * w px kittens thanks to placekitten`
- tfaker.placekitten(width, height) `// display width * height px kittens. output=> "http://placekitten.com/
## Utility methods :
- tfaker.realdate() `// like new Date(last century). output => "Wed Jul 31 1985 00:10:18 GMT+0100(CEST)"`
width/height"`

![Targaryen](https://i.ibb.co/5Fvv4xb/targ-Transparent.png)

#### todo: 
- TESTS (next step, mandatory§§§)
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
- purge eslint or bother to setup .env devDependencies etc.
- build (needed to test browser support ; objective is to support IE6/ Netscape2.01 but I need to look deeper into ECMAScript1 before saying it will even be feasible)

#### Why support IE6 and Netscape and not `mjs` in this day and age ?
I learned JS with ES6 syntax (which I very like), only to realize that you usually can't afford ES6 into your backend, especially in production. It's actually not that bad: the limited ways of old makes me do researches and learn plenty good stuff about Js. Try to support of the oldest stuff possible should bring even more fun and knowledge.

#### Have you heard about Babeljs?
Babel is an awesome, one of a kind library. Big up to these boys
![Jon Snow](https://i.ibb.co/LSGFXR2/dunwanit.png)
#### Want to open an issue ?
![DanyNope](https://i.ibb.co/4Y2wP6Y/danuBad.jpg)
#### Want to open a PR ?
![DanyYay](https://i.ibb.co/R9dYJDr/danyGood.jpg)
### Credits
- [faker.js][1] obviously as the main inspiration source. Excellent library and for production purposes you should definitely use it instead of my hobby project.
- [Dany][2].
- [placekitten.com][3] for their awesome service.
- [jeffreylancaster][4] - I intend to get the most out of it and ping you when it is worth.

[1]: https://github.com/marak/Faker.js/
[2]: https://www.instagram.com/emilia_clarke/
[3]: http://placekitten.com/
[4]: https://github.com/jeffreylancaster/game-of-thrones