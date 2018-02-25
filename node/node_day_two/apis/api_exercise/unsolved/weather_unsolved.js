/*

1. Just like how I accessed the omdb api, npm install 'request' and require it in this file
2. Just like how we did it with jquery, but instead of .val(), that's going to be process.argv[2]
3. Make an api call using the weather api string with the weather api key and an input on the end

*/

var request = require('request');

var apiKey = '275d5dfdea53a2d3e3869f48d154e9ac';
var weatherApiUrl = 'http://api.openweathermap.org/data/2.5/weather?appid=' + apiKey + '&units=imperial&q=';
var location = process.argv.slice(2).join("+");

var url = weatherApiUrl + location;

request(url, function(error, response, body){
	if(!error && response.statusCode === 200){
		if(location){
			var obj = JSON.parse(body);
			console.log("Temperature: " + obj.main.temp);
			console.log("Weather: " + obj.weather[0].main)
		}
	}
})

