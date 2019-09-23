# tfaker.js
## Faking Targaryen data has never been easier. 
## Compatible IE6 and Node 0.10.48 onwards !
![Daenerys Targaryen](https://i.ibb.co/FJcDwz2/Ciwa-MU5-Ws-AAFgdc.jpg)
#### !!! WORK IN PROGRESS !!!

- import syntax : 
```
var tfaker = require("tfaker");   // you installed with npm (tfaker is in node_modules)   
var tfaker = require("./tfaker");   // you installed with clone (absolute path to tfaker/index.js)
```

- methods syntax : 
```
tfaker.fullname()  
// output -> "Daenerys Targaryen"
```

##### todo: 
- firstname works
- lastname works
- fullname works
- email works

- image (need datamining / api)

- country works
- region works
- city (need datamining)

- date (need lunar/westerosi calendar 100 last years)
- realdate works

- quote (need datamining)
- phrase (need datamining)
- paragraph (need datamining)

- array (need datamining)
- object (cf array)


- number (class that have several methods, some that could take args)

- placekitten ( 0 arg returns a square default, 1 args is square x * x, 2 args is x * y rectangle)
- catapi (min 1 argument: catapi key; returns array of cats. second argument is for choosing type/api method)

- purge eslint or bother to setup .env devDependencies etc.
- setup travis (ie6 / node 0.10.48 tests ? what about Netscape ?)