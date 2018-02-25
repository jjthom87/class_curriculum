var fs = require('fs');
module.exports = (file, cb) => {
	fs.readFile(file, 'utf-8', function(err, data){
		cb(JSON.parse(data))
	})
}