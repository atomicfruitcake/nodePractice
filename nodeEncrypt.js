// Example using CBC (Cipher Block Chaining) and symmetric encryption
var crypto = require('crypto'),algorithm = 'aes-256-cbc', key = 'someKey';

function encrypt(text){
    var cipher = crypto.createCipher(algorithm, key)
    var crypted = cipher.update(text,'utf8','hex')
    crypted += cipher.final('hex');
    return crypted;
}

function decrypt(text){
   var decipher = crypto.createDecipher(algorithm, key)
   var dec = decipher.update(text,'hex','utf8')
   dec += decipher.final('utf8');
   return dec;
}

var text = "Text to encrypt and decrypt";
var e = encrypt(text);
console.log(e);
var d = decrypt(e);
console.log(d);	