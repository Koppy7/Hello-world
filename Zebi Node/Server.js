var http = require('http');
var server = http.createServer(function (req, res) {
    "use strict";
    res.writeHead(200);
    res.end('Hello World !');
});
server.listen(8081);
