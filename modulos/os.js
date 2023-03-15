const os = require('os');

// para saber la arquitectura
console.log(os.arch());

//para saber la plataforma linux || mac || win || android...
console.log(os.platform());

//saber los hilos y caracteristicas del procesador
console.log(os.cpus());
console.log(os.cpus().length);

// condicional para saber que plataforma se esta trabajandp y referente a eso hacer algo
if(os.platform() === "Windows"){
  console.log("Soy sistema linux");
}else{
  console.log(`No soy sistema windows. Soy sistema ${os.platform()}`);
};

console.log(os.constants); 

// saber cuantos bytes tenemos de memoria libres freemem o total totalmem
const SIZE = 1024;

function kb( bytes ) { return bytes / SIZE };
function mb( bytes ) { return kb(bytes) / SIZE };
function gb( bytes ) { return mb(bytes) / SIZE };

console.log(os.freemem())

console.log(kb(os.freemem()));
console.log(mb(os.freemem()));
console.log(gb(os.freemem()));

console.log(gb(os.totalmem()));

console.log(os.homedir())
console.log(os.tmpdir())

console.log(os.hostname())

console.log(os.networkInterfaces())
