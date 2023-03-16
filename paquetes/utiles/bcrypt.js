// para encriptar strings

const bcrypt = require('bcrypt');

const passport = '1234Segura!';

bcrypt.hash(passport, 5, (err, hash) =>{
  console.log(hash);
  console.log(err)

  bcrypt.compare(passport,hash, (err,res) =>{
    console.log(res);
    console.log(err)
  });
});