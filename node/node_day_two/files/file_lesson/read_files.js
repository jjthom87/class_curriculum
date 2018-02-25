var fs = require('fs');

//read one file
fs.readFile('./read_from.txt', 'utf-8', function(err, data){
	if(err){
		throw err;
	}
	//console.log(data)

	var arr = [];
	// console.log(data)
	//console.log(data.split("\n"))
	var split = data.split("\n");
	// for(var i = 0; i < split.length; i++){
	// 	if(split[i] === ""){
	// 		split.splice(i,1)
	// 	}
	// }
	//console.log(split.join(" "))
})

//read all files
fs.readdir('.', function(err, files){
	console.log(files)
})
