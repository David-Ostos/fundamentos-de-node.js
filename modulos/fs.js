const fs = require('fs');

// funcion para leer un archivo
function leer(ruta, cb){
  fs.readFile(ruta, (err, data) =>{
    //leido
    cb(data.toString())
  })
}

// funcion para escribir y crear un archivo 
function escribir(ruta, contenido, cb){
  fs.writeFile(ruta,contenido,function (err){
    if(err){
      console.error(`No he podido escribirlo ${err}`) 
    }else{
      console.log(`Se ha escrito correctamente`)
    }
  });
}

// funcion para eliminar archivo
function borrar(ruta,cb){
  fs.unlink(ruta, cb);
}

/* escribir(__dirname + '/archivo1.txt',`Soy un archivo nuevo

con varias lineas`, console.log) */
//leer(__dirname + "/archivo1.txt", console.log);
borrar(__dirname + "/archivo1.txt", console.log)
