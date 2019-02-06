// import modul momentjs
var moment = require("moment");
// import salam
var salam = require("./salam");
// import module file system
var fs = require('fs');


// menggunakan modul momentjs
console.log("Sekarang : "+moment().format('D MMM YYYY, h:mm:ss a'));
// menggunakan modul salam
console.log(salam.salamPagi());