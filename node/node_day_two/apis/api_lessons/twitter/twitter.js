var keys = require('./keys.js');
var Twitter = require('twitter');
var client = new Twitter(keys); 
var params = {screen_name: 'jcjt929'};

client.get('statuses/user_timeline', params, function(error, tweets, response) {
	if (!error) {
		for(var i = 0; i < tweets.length; i++){
			console.log(tweets[i].text)
		}
	}
})