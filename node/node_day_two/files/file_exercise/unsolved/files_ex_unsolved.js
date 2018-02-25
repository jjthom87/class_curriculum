/*

1. Create a .txt file to write to and to read from, use the terminal please
2. write into one of the text files, "Here I Go Again"
3. Read from that file
4. Here's the hard part:
	- make sure to include a process.argv[2] variable
	- if that is not included, console.log an error message of your choice
	- Write to the other file, and on one line, write to that file "Here <process.argv[2]> Goes again"
	- As you can tell, i changed "Go" to "Goes", and i changed the "I" to <process.argv[2]>
	- you can use replace to do this change: https://www.w3schools.com/jsref/jsref_replace.asp

*/

var fs = require('fs');
var arg = process.argv[2];

if(arg){
	fs.readFile('./read_from.txt', 'utf-8', function(err, data){
		var rep = data.replace("I", arg).replace("Go", "Goes");

		fs.writeFile('./write_to.txt', rep, function(err){
			if(err) throw err;
			console.log("This has been written to the text file")
		})
	})
} else {
	console.error("Please enter a third command")
}