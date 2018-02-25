var EventEmitter = require('events');
var myEmitter = new EventEmitter();

//creating events with no argument
myEmitter.on('hello', function(){
	console.log("hello")
});

myEmitter.on('goodbye', function(){
	console.log("goodbye")
});

myEmitter.emit('hello')
myEmitter.emit('goodbye')

//examples with an argument
myEmitter.on('say-something', function(message){
	console.log(message)
});

myEmitter.emit('say-something', 'What\'s up dawg')