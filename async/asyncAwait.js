
async function hola(nombre){
  return new Promise(function (resolve, reject){
    setTimeout( function(){
      console.log(`Hola ${nombre} `);
      resolve(nombre);
    },2000)
  });
}


async function adios(nombre){
  return new Promise((resolve,reject) =>{
    setTimeout( function(){
      console.log(`Adios ${nombre} `);
      resolve();
    },800)
  })
}

async function hablar(nombre){
  return new Promise((resolve,reject)=>{
    setTimeout( function(){
      console.log("Bla bla bla bla...");
      resolve(nombre);
      //reject("Hay un problema...")
    },1000)
  })
}

// ----

async function main(nombre){
  await hola(nombre);
  await hablar(nombre);
  await hablar(nombre);
  await hablar(nombre);
  await hablar(nombre);
  await hablar(nombre);
  await adios(nombre);
  console.log("termina el proceso")
}
console.log("Empezamos el proceso")
main("David");
