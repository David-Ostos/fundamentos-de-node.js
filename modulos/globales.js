console.log(setInterval);

let i = 0;

let intervalo = setInterval(function(){
  console.log("hola");
  if(i === 3){
    clearInterval(intervalo);
  }
  i++
},1000);

console.log(process) // para ver los procesos

console.log(__dirname) // para ver la carpeta donde se esta ejecutando

console.log(__filename) // para ver el file 

