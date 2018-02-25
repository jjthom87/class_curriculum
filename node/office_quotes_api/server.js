var express = require('express');
var app = express();

var PORT = process.env.PORT || 8000;

var jsonObj = require('./object.js');

var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');

    if ('OPTIONS' == req.method) {
      res.send(200);
    }
    else {
      next();
    }
};
app.use(allowCrossDomain);

app.get('/v1/api/all', function(req,res){
	res.json(jsonObj)
});

app.get('/v1/character-info/:char', function(req,res){
  var paramSplit = req.params.char.toLowerCase();
  var charQuotes = [];
  for(var i = 0; i < jsonObj.length; i++){
    if(req.params.char === jsonObj[i].quoter.toLowerCase().split(" ")[0]){
      charQuotes.push(jsonObj[i])
    }
  }
  res.json(charQuotes);
})

app.listen(PORT)