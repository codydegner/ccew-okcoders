"use strict";
let fs = require("fs");

console.log("About to read file");
fs.readFile("package.json", function(err, data) {
  if(err) {
    console.log("Unable to read file package.json");
  } else {
    console.log("Contents:\n" + data.toString());
  }
});
console.log("Finished I/O");
