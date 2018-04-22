// Using the console with node


// Write logs to file
var fs = require('fs')
const { Console } = require('console');
const output = fs.createWriteStream('./logs/stdout.log');
const errOutput = fs.createWriteStream('./logs/stderr.logs')

// Now use in a custom print
const print = new Console(output, errOutput)

const roll = 839147;
print.log('roll: %d', roll);
print.log('This is written to a file')
