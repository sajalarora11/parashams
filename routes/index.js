var mainJSON = require('../content.json');

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
	contact = mainJSON.contact;
	res.render('contact', {
		con: contact
	});
};

exports.notFound = function(req,res){
	res.send("<h1>Sorry, this page is not fouund.</h1>");
};