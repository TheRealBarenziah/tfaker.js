# tfaker.js
## Faking Targaryen data has never been easier. 
![Daenerys Targaryen](https://i.ibb.co/FJcDwz2/Ciwa-MU5-Ws-AAFgdc.jpg)
### !!! WORK IN PROGRESS !!!
##### Compatibility:
- Node >= 0.10.48

## Import : 
```
var tfaker = require("tfaker");   // with npm (tfaker is in node_modules)   
var tfaker = require("./tfaker");   // with git clone (absolute path to tfaker/index.js)
```
## EZ Tweaks :
Files in `./content` contains the arrays that most methods randomize. To add your own content, just edit the array named after the method.

## Methods : 
- tfaker.firstname() `// output => "Aegon"`
- tfaker.lastname() `// output => "Targaryen"`
- tfaker.fullname() `// output => "Visenya Targaryen"`
- tfaker.email() `// output => "dragonchan35@dragonstone.wst"`

- tfaker.country() `// output => "Westeros"`
- tfaker.region() `// output => "The Red Waste"`

- tfaker.realdate() `// like new Date(last century). output => "Wed Jul 31 1985 00:10:18 GMT+0100(CEST)"`

- tfaker.placekitten() `// display 100px kitten image. output => "http://placekitten.com/100/100"`
- tfaker.placekitten(width) `// width is type integer; display w * w px kittens thanks to placekitten`
- tfaker.placekitten(width, height) `// display width * height px kittens. output=> "http://placekitten.com/width/height"`

##### todo: 
- TESTS (it was at the end of the list where it made no sense)
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

### Credits
- [faker.js][1] obviously as the main inspiration source. Excellent library and for production purposes you should definitely use it instead of my hobby project.
- [Dany][2].
- [placekitten.com][3] for their awesome service.
- [jeffreylancaster][4] - I intend to get the most out of it and ping you when it is worth.

[1]: https://github.com/marak/Faker.js/
[2]: https://www.instagram.com/emilia_clarke/
[3]: http://placekitten.com/
[4]: https://github.com/jeffreylancaster/game-of-thrones
