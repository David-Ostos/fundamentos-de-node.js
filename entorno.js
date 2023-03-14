console.log("Hola");

let nombre = process.env.NOMBRE || "Anonimo";
let web = process.env.WEB || "no tengo web"

console.log(`Hola ${nombre}`);
console.log(`Mi web es ${web}`);