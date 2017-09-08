let http = require("http");
let fs = require("fs");

let server = http.createServer(function(req, res) {
  console.log(req.url);
  fs.readFile("index.html", function(err, data) {
    if(err) {
      res.writeHead(200, {"Content-Type": "text/plain"});
      res.end("Unable to read the file index.html");
    } else {
      res.writeHead(200, {"Content-Type": "text/html"});
      res.end(data);
    }
  });
});

server.listen(3000, "127.0.0.1");