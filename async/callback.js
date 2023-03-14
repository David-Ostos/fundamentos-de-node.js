/* let nombre = "David" */

function hola(nombre,miCallback){
  setTimeout( function(){
    console.log(`Hola ${nombre} `);
    miCallback(nombre);
  },1000)
}

function adios(nombre, otroCallback){
  setTimeout( function(){
    console.log(`Adios ${nombre} `);
    otroCallback();
  },800)
}

console.log("Iniciando proceso...")

hola("David",function(nombre){
  adios(nombre,function(){
    console.log("terminando proceso...")
  })

});

/* hola('David',function(){})
adios('David',function(){})
 */