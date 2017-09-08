let fs = require("fs");
let http = require("http");


console.log("Before I read");
fs.readFile("./10-examples/about.txt", function(err, data) {
  if(err) {
    console.log("The file was not found");
  } else {
    console.log("File contents:\n" + data);
  }
});
console.log("After I read");