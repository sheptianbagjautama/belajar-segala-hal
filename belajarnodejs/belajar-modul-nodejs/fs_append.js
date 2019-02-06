var fs = require('fs');

// create a file name mynewfile1.txt;
fs.appendFile('mynewfile.txt','Hello dari saya sheptian', function (err) {
   if(err) throw err;
   console.log('Save!'); 
});