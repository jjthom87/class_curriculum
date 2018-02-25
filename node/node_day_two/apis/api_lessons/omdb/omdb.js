var request = require('request');
var movieTitle = process.argv.slice(2).join("+")

const MOVIE_URL = 'http://www.omdbapi.com/'
const API_KEY = '40e9cece';
// var url = `${MOVIE_URL}?apikey=${API_KEY}&t=${movieTitle}`;
var url = MOVIE_URL + "?apikey=" + API_KEY + "&t=" + movieTitle;

request(url, function(error, response, body) {
	if (!error && response.statusCode === 200) {

		if (!movieTitle) {
			console.log("Please enter movie")
		} else {
			// console.log(body)
			var movieObject = JSON.parse(body);
			console.log(movieObject)
			console.log(" ");
			console.log("Movie Title: " + movieObject.Title);
			console.log("Release Date: " + movieObject.Released);
			console.log("IMDB Rating: " + movieObject.imdbRating);
			console.log("Country: " + movieObject.Country);
			console.log("Language: " + movieObject.Language);
			console.log("Plot: " + movieObject.Plot);
			console.log("Actors: " + movieObject.Actors);
		}
	}
})