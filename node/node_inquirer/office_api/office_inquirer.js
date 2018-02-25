var request = require('request');
var inquirer = require('inquirer');

inquirer.prompt([
		{
			type: "list",
			message: "Which is your favorite character from the show 'The Office'?",
			choices: ["Michael Scott", "Pam Beesly", "Jim Halpert", "Dwight Schrute"],
			name: "office_characters"
		},
	]).then(function(answers){
		request('https://intense-reef-37664.herokuapp.com/v1/api/all', function(err, res, body){
			var chars = JSON.parse(body);
			for(var i = 0; i < chars.length; i++){
				if(answers.office_characters === chars[i].quoter){
					console.log(chars[i].quote)
				}
			}
		});
});