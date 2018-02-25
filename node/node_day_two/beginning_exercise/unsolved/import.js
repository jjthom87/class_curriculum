/*

Explanation on process.argv:
when you type: node file.js, 'node' is process.argv[0] & 'file.js' is process.argv[1]
if you want to add a third argument, you can add a variable to equal process.argv[2];
i.e.
var whatever = process.argv[2];
when you run the next command: node file.js jared
'node' is process.argv[0] && 'file.js' is process.argv[1] && 'jared' is process.argv[2]
the process.argv array is based on spaces in your command....console.log it...

for the exercise:
1. import the export
2. create variables for process.argv[2] & process.argv[3]
3. write an 'if' statement making sure process.argv[2] & process.argv[3] are not undefined
4. console.log the function that you imported, inserting process.argv[2] & process.argv[3] as the arguments in the function
5. if either process.argv[2] or process.argv[3] are not entered, console.log("Please enter two arguments")

*/

var importFunction = require('./export.js');

var commandThree = process.argv[2];
var commandFour = process.argv[3];

if(commandThree != undefined && commandFour != undefined){
	console.log(importFunction(commandThree, commandFour))
} else {
	console.log("Please enter two arguments")
}

