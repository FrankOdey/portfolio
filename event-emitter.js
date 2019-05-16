var EventEmitter = require('events').EventEmitter;

var getResource = functions(c){
// code here 
};

var r = getResource(5);
r.on('start', function(){
    console.log("I've started!");

});
r.on('data', function(d){
    console.log("  I received data ->" + d);

});

r.on('end', function(t){
    console.log("I'm done, with " + t + "data events.");
});