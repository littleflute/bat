const tag = "[15/index.js_v0.0.11] ";

var http = require('http');

var _port = 3000;

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end(tag + 'Hello blnode home page!' );
}).listen(_port);