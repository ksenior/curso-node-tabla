

const { number, options } = require('yargs');
const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs');

console.clear();

//console.log(argv);

//const base = 3;

//console.log(process.argv);

/*
const [,,arg3 = 'base=5'] = process.argv;

const [,base] = arg3.split('=');

console.log(base);
*/


crearArchivo(argv.b, argv.l, argv.h)
    .then(mgs => console.log(mgs))
    .catch(err => console.log(err))
    ;










