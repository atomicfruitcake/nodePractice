// Working with hashing in node

var fs = require('fs');
var crypto = require('crypto');
var key = 'ThisIsASuperSecretKey'
var hmac = crypto.createHmac('sha512', key);

var fileData = fs.ReadStream('dummyData.txt')

fileData.on('data', function(data) {
  hmac.update(data)
})

fileData.on('end', function() {
  var genHmac = hmac.digest('hex')
  fs.writeFileSync('dummyDataHmac.txt', genHmac);
}) 