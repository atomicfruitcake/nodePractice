// Working with hashing in node

var fs = require('fs')
var crypto = require('crypto');
var hash = crypto.createHash('sha512');
var file = fs.ReadStream('dummyData.txt')


file.on('data', function(data) {
	hash.update(data)
})

file.on('end', function() {
	var genHash = hash.digest('hex')
	fs.writeFileSync('dummyDataHashed.txt', genHash);
})

