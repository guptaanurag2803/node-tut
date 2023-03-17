//Modules - encapsulated code(on;y share minimum)
//CommonJS, every file in module(by default)
const names = require('./4-names');
const sayHi = require('./5-util')
const data = require('./6-alternative-flavour')
require('./7-mind-grenade')

console.log(names)
sayHi(names.john);
sayHi(names.peter);
sayHi('Susan');

