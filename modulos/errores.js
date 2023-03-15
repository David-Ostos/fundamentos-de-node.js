function  otraFuncion(){
  seRompe()
}

function seRompe(){
  return 3 + z;
}

// try catch 
try{
  seRompe();
}catch(e){
  console.error(`Vaya, algo se ha roto: ${e}`);
  console.error(e.message)
};

console.log("despues del error")