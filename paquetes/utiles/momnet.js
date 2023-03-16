//moment es una libreria para trabajar con fechas 

const moment = require('moment');

let ahora = moment();

console.log(ahora.toString());
console.log(ahora.format('DD/MM/YYYY - HH:mm:ss'));