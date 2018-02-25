var request = require('request');
var location = process.argv.slice(2).join('+');

var apiKey = '275d5dfdea53a2d3e3869f48d154e9ac';
var weatherApiUrl = 'http://api.openweathermap.org/data/2.5/weather?appid=' + apiKey + '&units=imperial&q=';
//var url = `${weatherApiUrl}${location}`;
var url = weatherApiUrl + location;

request(url, function(error, response, body) {
	if (!error && response.statusCode === 200) {

		console.log(body)
	}
})