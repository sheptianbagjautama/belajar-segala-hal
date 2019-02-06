// Import module file system
var fs = require('fs');

// Delete File
fs.unlink('mynewfile2.txt', function (err) {
    if(err) throw err;
    console.log('File deleted!');
})