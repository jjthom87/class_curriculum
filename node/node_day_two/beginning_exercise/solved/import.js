var func = require('./export.js');
var entryOne = process.argv[2];
var entryTwo = process.argv[3];

if(entryOne != undefined && entryTwo != undefined){
	console.log(func(entryOne, entryTwo))
} else {
	console.log("Please enter two arguments")
}