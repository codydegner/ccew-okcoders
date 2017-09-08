let circle = require("./circle");
let fs = require("fs");
let path = require("path");

let area = circle.area(10);
console.log(area);

fs.readFile("index.html", function(err, data) {
  if(err) {

  } else {
    console.log(data.toString());
  }
});



let filepath = path.join("examples", "about.txt");
