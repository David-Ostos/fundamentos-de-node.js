//let buffer = Buffer.alloc(4);
//let buffer2 = Buffer.from([1,2,10000,3,4,5,6,7,8,9,10]);

let buffer = Buffer.from('Hola')

console.log(buffer);
console.log(buffer);
//console.log(buffer2);

// ----
 let abc = Buffer.alloc(26);

 console.log(abc);

 for(let i = 0; i < 26; i++){
  abc[i] = i + 97;
 }
 console.log(abc);
 console.log(abc.toString());












 