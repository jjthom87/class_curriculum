var EventEmitter = require('events');
var myEmitter = new EventEmitter();

var action = process.argv[2];
var name = process.argv[3];
var age = process.argv[4];

myEmitter.on('greeter-under-18', function(message){
	console.log(message)
});

myEmitter.on('greeter-over-18', function(message){
	console.log(message)
});

if(action === "doorbell"){
	if(age == undefined || name == undefined){
		console.log("Please enter name then age after doorbell")
	} else {
		if(parseInt(age) < 18){
			myEmitter.emit('greeter-under-18', 'Hello ' + name + ", you're under 18 so you cant do much");
		} else {
			myEmitter.emit('greeter-over-18', 'Hello ' + name + ", you're over 18, so lets party")
		}
	}
} else {
	console.log("please enter \"doorbell\"")
}