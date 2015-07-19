var fs = require('fs');
var filePath = process.argv[2];

var buffer = fs.readFileSync(filePath);
var str = buffer.toString();

var count = str.split("\n").length - 1;

console.log(count);
