//const process = require('process');

process.on('beforeExit', () =>{
  console.log('Ale, el proceso va a terminar.');
})

process.on('exit', () =>{
  console.log('Ale, el proceso acabó.');
})

process.on('uncaughtException', (err,origin) => {
  console.error('Vaya se nos ha olvidado capturado un error')
  console.error(err)
})
try{
    x();
  }catch(err){
    console.error(err);
  } 

/* process.on('uncaughtRejection') */