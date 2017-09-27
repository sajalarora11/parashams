var mainJSON = require('../content.json');
var nodemailer = require('nodemailer');
var bodyParser = require('body-parser');
var index = mainJSON.index;

exports.home = function(req, res){
	res.render('home', {
		index: index
	});
};


exports.support = function(req, res) {
	var donate = mainJSON.support;
	res.render('support', {
		donate: donate
	});
};

exports.gallery = function(req, res) {
	var gallery = mainJSON.gallery;
	res.render('gallery', {
		gallery: gallery
	});
};

exports.about = function(req, res) {
	var about = mainJSON.about;
	res.render('about', {
		about: about
	});
};

exports.contact = function(req, res) {
	var contact = mainJSON.contact;
	

	res.render('contact', {
		contact: contact
	});
};

exports.send = function(req,res) {
	var transporter = nodemailer.createTransport({
		servies: 'Gmail', 
		auth: {
			user: 'sajalarora007@gmail.com',
			pass: 'Pillowtalk.111'
		}
	});
	var mailOption = {
		from: req.body.email,
		to: 'sajalarora007@gmail.com',
		subject: req.body.name,
		text: 'Hello there,\n\n' + req.body.message
	}
	transporter.sendMail(mailOption, function(error, info){
		if (error) {
			console.log(error)
		}
		else {
			console.log("Message sent sucessfully...");
		}
	});
}

exports.notFound = function(req,res){
	res.send("<h1>Sorry, this page is not fouund.</h1>");
};