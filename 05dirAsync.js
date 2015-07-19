// This was not good...
var fs = require('fs');
var filePath = process.argv[2];
var extension = process.argv[3];

fs.readdir(filePath, function filterFiles(err, list) {
  var filteredFiles = []
  for(i=0; i<list.length; i++) {
    var fileName = list[i];
    if (fileName.indexOf(extension) > -1) {
      filteredFiles.push(fileName);
    }
  }

  for(i=0; i<filteredFiles.length - 1; i++) {
    var fileName = filteredFiles[i];
    console.log(fileName);
  }
});
