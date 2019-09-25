# tfaker.js
## Faking Targaryen data has never been easier. 
![Daenerys Targaryen](https://i.ibb.co/FJcDwz2/Ciwa-MU5-Ws-AAFgdc.jpg)
### !!! WORK IN PROGRESS !!!
### Compatibility:
- Node >= 0.10.48

## Import : 
```
var tfaker = require("./tfaker");   // with git clone (absolute path to tfaker/index.js)
var tfaker = require("tfaker");   // with npm (tfaker is in node_modules)   
```
## EZ Tweaks :
Each file in `./content` is named after the method calling it, and is basically an array of content. To customize any of these methods, just drop your stuff into the array, respecting its format.

# Methods :
### Targaryen :  
- tfaker.firstname() `// output => "Aegon"`
- tfaker.lastname() `// output => "Targaryen"`
- tfaker.fullname() `// output => "Visenya Targaryen"`
- tfaker.email() `// output => "dragonchan35@dragonstone.wst"`

- tfaker.country() `// output => "Westeros"`
- tfaker.region() `// output => "The Red Waste"`
### Kittens: 
- tfaker.placekitten() `// display 100px kitten image. output => "http://placekitten.com/100/100"`
- tfaker.placekitten(width) `// width is type integer; display w * w px kittens thanks to placekitten`
- tfaker.placekitten(width, height) `// width * height px kittens => "http://placekitten.com/width/height`
### Utils :
- tfaker.realdate() `// like new Date(last century). output => "Wed Jul 31 1985 00:10:18 GMT+0100(CEST)"`

#### incoming: 
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
- work on browser compatibility , start ie9 going backwards (setup stable xp vm for automated tests?). Also Netscape
- purge eslint or bother to setup .env devDependencies etc., optimize etc

#### Why IE6/Netscape  ?
I learned JS with ES6 syntax (which I very like), only to realize that you usually can't afford ES6 into your backend especially in production. It's actually not that bad: the limited ways of old have me do researches and learn plenty of good stuff about JS. And I feel like supporting the oldest stuff possible is a path to more fun and knowledge. I know nothing, just like the guy below.

#### Have you heard about Babeljs?
Babel is an awesome, one of a kind library. Big up to them
![Jon Snow](https://i.ibb.co/LSGFXR2/dunwanit.png)
#### Issues (jk please do)
![DanyNope](https://i.ibb.co/4Y2wP6Y/danuBad.jpg)
#### Pull Requests
![DanyYay](https://i.ibb.co/R9dYJDr/danyGood.jpg)
### Credits
- [faker.js][1] obviously the main inspiration source. Excellent library that I intend to continue to use in harmony with mine.
- [Dany][2] for the `"bEsT sEaSoN eVEr"` and also best eyebrows.
- [placekitten.com][3] for the awesome service: the syntax sugar rely solely on their servers. Click 'em
- [jeffreylancaster][4] - I intend to get the most out of it and ping you when it is worth.

[1]: https://github.com/marak/Faker.js/
[2]: https://www.instagram.com/emilia_clarke/
[3]: http://placekitten.com/
[4]: https://github.com/jeffreylancaster/game-of-thrones