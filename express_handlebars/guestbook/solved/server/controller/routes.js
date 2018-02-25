var express = require('express');
var path = require('path');

var router = express.Router();

var models = require('./../models');
models.sequelize.sync();

router.get('/', function(req,res){
	models.Guestbook.findAll({}).then(function(messages){
		res.render('guestbook', {messages: messages});
	});	
});

router.post('/api/message', (req,res) => {
	console.log(req.body)
	if(req.body.name !== '' && req.body.message !== ''){
		models.Guestbook.create({
			name: req.body.name,
			message: req.body.message
		}).then(function(message){
			res.json(message);
		});
	} else if (req.body.name === '' & req.body.message !== '') {
		models.Guestbook.create({
			name: "Guest",
			message: req.body.message
		}).then(function(message){
			res.json(message);
		});	
	} else if ((req.body.name !== '' && req.body.message === '') || (req.body.name === '' && req.body.message === '')) {
		res.json("null_message")
	}
});

router.get('/api/messages', (req,res) => {
	models.Guestbook.findAll({}).then(function(messages){
		res.json(messages);
	});	
});

router.delete('/api/delete-message/:id', (req,res) => {
	models.Guestbook.destroy({where: {id: req.params.id}});
});

router.put('/api/update-message/:id', (req,res) => {
	models.Guestbook.findOne({ where: { id: req.params.id}}).then(function(message){
		message.set('message', req.body.message);
		message.save();
	}).then(function(success){
		res.json({message: "Message Updated"})
	}).catch(function(err){
		throw err
	});
});

module.exports = router;