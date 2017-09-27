var express = require('express');
var nodemailer = require('nodemailer');
var bodyParser = require('body-parser');

var app = express();

app.set('view engine', 'ejs');

var path = require('path');
app.use(express.static(path.join(__dirname, 'public')));

var route = require('./routes');

app.get('/', route.home);

app.get('/support', route.support);

app.get('/gallery', route.gallery);

app.get('/about', route.about);

app.get('/contact', route.contact);

app.post('/send', route.send);

app.get('*', route.notFound);

app.listen('3000', function(){
	console.log("Listening to port 3000");
});