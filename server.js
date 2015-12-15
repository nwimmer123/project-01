// SERVER-SIDE JAVASCRIPT

//require express in our app
var express = require('express');
// generate a new express app and call it 'app'
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var html = require('html');
var hbs = require('hbs');

// serve static files from public folder
app.use('/',express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'hbs');

/************
 * DATABASE *
 ************/

var db = require('./models');

/**********
 * ROUTES *
 **********/

app.get('/', function homepage (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

app.get('/show', function homepage (req, res) {
  res.sendFile(__dirname + '/views/show.html');
});


//getting one book
app.get('/api/books/:id', function createSingleBook(req, res) {
	//get book by id and send it to views/show.html
	db.Book.findOne({_id: req.params.id}, function(err, book) {
		console.log(book);
		res.render("show",book);
	});
});

//server requesting data from database/;
app.get('/api/books', function booksIndex(req, res) {
	db.Book.find({}, function(err, books) {
		res.json(books);
		//console.log(books);
		//console.log("Books sent!");
	});

});


//server sending data from create book form to database and then 
//sending same data back to client

app.post('/api/books', function createBook(req, res){
	console.log ("The following should be the new book going into the database:", req.body);
	db.Book.create(req.body, function(err, book) {
		if (err) {console.log('ERROR:', err); }
		//console.log(book);
		res.json(book);
	});
});




/**********
 * SERVER *
 **********/

// listen on port 3000
app.listen(process.env.PORT || 3000, function () {
  console.log('Express server is running on http://localhost:3000/');
});
