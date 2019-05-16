var http = require('http');

var options = {
    host: 'www.google.com',
    port: 80,
    path: '/',
    method: 'GET'
};

console.log('Going to make request...');

var req = http.get(options, function(_error, response){
    console.log(response.statusCode);
    response.pipe(process.stdout);
});