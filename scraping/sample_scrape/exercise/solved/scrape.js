var request = require('request');

//cheerio is meant to use jquery on server side
var cheerio = require('cheerio');

//check out the url in there before you do anything
request('https://finance.yahoo.com/tech/', function(err, response, html){
	if (err) {
		throw err
	}
	//console.log("--response--")
	//console.log(response)
	//console.log("--html--")
	//console.log(html)

	//you are able to query through the html of the request route using cheerio
	//look for the 'review' class in the urls html (google inspect)
	//.each is looping through all the 'review' classes and finding the first h2, img, & a tag within the class
	//then i am merely adding that information to an array
	var $ = cheerio.load(html);
	var results = [];
	$('div').each(function(){
		//console.log(index)
		if($(this).data('reactid') == 6){
			var image = $(this).find("img").first().attr("src");
			if(image){
				console.log(image)
			}
		}
		// var title = $(element).find('h2').first().text();
		// var image = $(element).find('img').first().attr('src');
		// var link = $(element).find('a').first().attr('href');

		// var data = {
		// 	title: title,
		// 	image: image,
		// 	link: link
		// };
		//console.log(data)
		// results.push(data);
		// console.log(results)
	});
});