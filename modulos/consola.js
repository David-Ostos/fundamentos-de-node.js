console.log('Algo');

console.info("Otra cosa");

console.error("error");

console.warn('Alerta');

console.log("------------------------------------------------------------")
// ----
var tabla = [
  {
    a:1,
    b:"z"
  },
  {
    a:2,
    b:"y"
  }
]

console.table(tabla);
console.log(tabla);
console.log("------------------------------------------------------------")
// >---< agrupar las consolas para indentificar el grupo 

console.group("Conversacion:")
console.log('Hola');
console.log('Blablabla');
console.log('Adios');

console.groupEnd("conver")

console.log( "otra cosa de otrafuncion ")

console.log("------------------------------------------------------------")

function funcion1(){
  console.group("funcion1");
  console.log('esta es la funcion 1');
  console.log("esta tambien es de la funcion 1");
  console.log("esta tambien")
  funcion2()
  console.groupEnd("funcion1")
  console.log("estamos de vuelta en la funcion 1")
  console.log("cerrando")
}

function funcion2(){
  console.group("funcion2");
  console.log('esta es la funcion 2');
  console.log("esta tambien es de la funcion 2");
  console.log("esta tambien")
  console.groupEnd("funcion2")
}

console.log("empezamos")
funcion1();

console.log("------------------------------------------------------------")

console.count("veces");
console.count("veces");
console.count("veces");
console.count("veces");
console.count("veces");
console.count("veces");
console.count("veces");

console.log("------------------------------------------------------------")

console.countReset("veces");
console.count("veces");
console.count("veces");

