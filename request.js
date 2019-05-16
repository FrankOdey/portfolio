var request = require('request');
request('http://www.frankodey.com/', function(error, response, body){
    if (!error && response.statusCode === 200) {
        console.log(body);
        console.dir(respone);
    }
})

module.export.request = req