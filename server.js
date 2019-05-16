var http = require('http')
http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('this is the new server\n');
}).listen(4880, '127.0.0.1');
console.log('server running at http://127.0.0.1:4880/');