// SERVER-SIDE JAVASCRIPT

//require express in our app
var express = require('express');
// generate a new express app and call it 'app'
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var html = require('html');
var hbs = require('hbs');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;


// serve static files from public folder
app.use('/',express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'hbs');
app.use(cookieParser());
app.use(session({
  secret: 'supersecretkey',
  resave: false,
  saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());

// passport config
//passport.use(new LocalStrategy(User.authenticate()));
// passport.serializeUser(User.serializeUser());
// passport.deserializeUser(User.deserializeUser());

/************
 * DATABASE *
 ************/

var db = require('./models');
//var Post = require('./models/post');
var User = require('./models/user');
var Review = require('./models/review');

/**********
 * ROUTES *
 **********/

app.get('/', function homepage (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

app.get('/show', function homepage (req, res) {
  res.sendFile(__dirname + '/views/show.hbs');
});

//getting one book
app.get('/api/books/:id', function createSingleBook(req, res) {
	//get book by id and send it to views/show.html
	db.Book.findOne({_id: req.params.id}, function(err, book) {
		console.log(book);
		res.render("show",book);
	});
});

//getting one books reviews when user requests to see the book 
//associated with the review
// app.get('/api/books/books_id/review_id', function revealReview(req, res) {
// 		db.Book.findOne({_id: req.params.id}, function(err, book) {
// 		console.log(book);
// 		res.render("show",book.review);
// 	});
// });


//server requesting data from database/;
app.get('/api/books', function booksIndex(req, res) {
	db.Book.find({}, function(err, books) {
		res.json(books);
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

//delete item selected on show page
app.delete('/api/books/:id', function destroy (req, res){
	var bookId = (req.params.id);
	db.Book.remove({_id: bookId}, function(err, book) {
		if (err) {console.log('ERROR:', err); }
		res.status(204).send();
	});
});

//update book data
app.put('/api/books/:id', function updateBook (req, res) {
	var bookId = (req.params.id);
	db.Book.findByIdAndUpdate(bookId, req.body, function (err, book) {
		if (err) {console.log('ERROR:', err); }
		console.log("I have found this book and would like to update it:", book);
		book.save(function (err, savedBook) {
			if (err) {console.log('ERROR:', err); }
			console.log("WHO are you saved book?", savedBook);
			res.json(savedBook);
		});
	});
});

/**********
 * SERVER *
 **********/

// listen on port 3000
app.listen(process.env.PORT || 3000, function () {
  console.log('Express server is running on http://localhost:3000/');
});
