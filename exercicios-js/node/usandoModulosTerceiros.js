/**
 * npm i lodash
 * npm i -g nodemon
 * nodemon usarModulosTerceiros.js //antes entrar na pasta onde está o .js
 */



const _ = require('lodash')
setInterval(() => {
    console.log(_.random(900,1000))
}, 2000);