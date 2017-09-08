"use strict";
let http = require("http");
let fs = require("fs");
let myfs = require("./fs");

let server = http.createServer(function(req, res) {
  console.log(req.url);
  res.writeHead(200, {"Content-Type": "text/plain"});
  fs.readFile("index.html", function(err, data) {
    if (err) {
      res.writeHead(200, {'Content-Type': 'text/plain'});
      res.end("Unable to read file index.html\n");
    } else {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.end(data.toString());
    }
  });
  // res.end("Hello World\n");
});
server.listen(3000, "127.0.0.1");

