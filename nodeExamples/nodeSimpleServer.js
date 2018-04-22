var http = require('http');
var fs = require('fs')
var host = '127.0.0.1'
var port = 3000

var server = http.createServer((req, res) => {
	res.writeHead(200, {'Content-Type': 'text/html'});
	console.log('Server started')
	fs.readFile('index.html', (err, data) => {
		if (err)
			throw err;
		console.log('Success')
		res.end(data)
	})
})

server.listen(port, host, (error) => {
	if (error) {
		return console.log('Error occured: ', error);
	}
	console.log('server is listening on ' + host + ': '+ port);
})