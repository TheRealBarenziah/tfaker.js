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
The `./content` directory contains files named after the method calling them. Simply insert new values to any method by editing the related file in the `./content` directory.

## Methods : 
- firstname() `// output => "Aegon"`
- lastname() `// output => "Targaryen"`
- fullname() `// output => "Visenya Targaryen"`
- email() `// output => "dragonchan35@dragonstone.wst"`

- country() `// output => "Westeros"`
- region() `// output => "The Red Waste"`

- realdate() `// like new Date(last century). output => "Wed Jul 31 1985 00:10:18 GMT+0100(CEST)"`

- placekitten() `// generate 100 * 100px kittens thanks to placekitten`
- placekitten(width) `// if W is type integer, generate W * W px kittens`
- placekitten(width, height) `// if W and H are type integers, generate W * H px kittens`

##### todo: 
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
- setup travis (once testing becomes useless uwu)

### Credits
- [faker.js][1] obviously as the main inspiration source. This library is awesome and for production purposes you should definitely use it instead of my hobby project.
- [Dany][2].
- [placekitten.com][3] for their awesome service.
- [jeffreylancaster][4] - I intend to get the most out of it and ping you when it's worth.

[1]: https://github.com/marak/Faker.js/
[2]: https://www.instagram.com/emilia_clarke/
[3]: http://placekitten.com/
[4]: https://github.com/jeffreylancaster/game-of-thrones
