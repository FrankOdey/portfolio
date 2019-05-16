var http = require ('http');
var socketio = require ('socket.io');
var fs = require ('fs');

var handler = function (req, res){
    fs.readFile(__dirname + '/index.html', function(err, data){
        if (err) {
            res.writeHead(500);
            return res.end('Error loading index.html');

        } else {
            res.writeHead(200);
            res.end(data);

        }
    })
};

var server = http.createServer(handler);
var io = socketio.listen(server);

io.sockets.on('connection', function(socket){
    setInterval(function(){
        var timestamp = Data.now();
        console.log('Emitted' + timestamp);
        socket.emit('timer', timestamp);
    }, 2000);
    socket.on('submit', function(data){
        console.log('submitted' + data);
    });
});

server.listen(8080);
console.log('Server is running!');