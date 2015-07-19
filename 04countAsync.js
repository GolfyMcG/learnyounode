var fs = require('fs');
var filePath = process.argv[2];

fs.readFile(filePath, 'utf8', function doneReading(err, str) {
  if (err) {
    errorMessage();
  } else {
    printCount(str)
  }
});

function errorMessage() {
  console.log("There was an error reading the file");
}

function printCount(str) {
  var count = str.split("\n").length - 1;
  console.log(count);
}
