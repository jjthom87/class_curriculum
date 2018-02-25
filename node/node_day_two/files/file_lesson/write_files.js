var fs = require('fs');

var whatImWritingToFile = "You're the voice try and understand it";

fs.writeFile('./write_to.txt', whatImWritingToFile, function(err){
	if(err) throw err;
	console.log('written to file')
})