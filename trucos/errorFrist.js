function asincrona(callback){
    setTimeout(function(){
      try{
        let a = 3 + z;
        callback(null, a);
      }catch(e){
        callback(e, null);
      }
    },1500);
}

  asincrona((err, dato) => {
    if(err){ 
      console.error(`Tenemos un error ${err}`);
      console.error(err)
      return false;
      // throw err;// no va a funcionar, solo en asyncronas
    }

    console.log(`Todo bien, la data es: ${dato}`);
  })