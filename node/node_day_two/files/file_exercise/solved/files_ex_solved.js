var fs = require('fs');
var argOne = process.argv[2];

if(argOne != undefined){
	fs.readFile('./f_ex.txt', 'utf-8', function(err, data){
		if(err){
			throw err;
		}
		console.log(data)
		var rep = data.replace("I", argOne).replace("Go", "Goes");
		console.log(rep)
		// var split = data.split("\n");
		// split.pop();
		// for(var i = 0; i < split.length; i++){
		// 	if(split[i] === "I"){
		// 		split[i] = split[i].replace("I", argOne)
		// 	}
		// 	if(split[i] === "Go"){
		// 		split[i] = split[i].replace("Go", "Goes")
		// 	}
		// }
		fs.writeFile('./write_ex.txt', rep, function(err){
			if(err) throw err;
			console.log('written to file')
		})
	})
} else {
	console.log("Enter your name as the third argument")
}