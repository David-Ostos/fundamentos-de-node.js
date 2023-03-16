console.time("todo")

let suma = 0;

console.time("bucle");

for (let i = 0; i < 1900000000; i++){
  suma++;
}
console.timeEnd("bucle")

let suma2 = 0;

console.time("bucle 2");

for (let i = 0; i < 10000000000; i++){
  suma2++;
}
console.timeEnd("bucle 2");

console.time("asincrono")

console.log("comienza el proceso asincrono")
asincrona()
  .then(() => {
    console.timeEnd("asincrono");
  });

console.timeEnd("todo");


function asincrona(){
  return new Promise((res) => {
    setTimeout(function () {
      console.log("termina el proceso asincrono ")
      res();
    },2000)
  })
}