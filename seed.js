var db = require("./models");

var books = [
		{
		contributor: "Noah",
		title: "Pandoras Star",
		author: "Peter Hamilton",
		genre: "Sci-fi"
		},
		{
		contributor: "Noah",
		title: "The Fellowship of the Ring",
		author: "J.R.R. Tolkien",
		genre: "Fantasy"
		},
		{
		contributor: "Noah",
		title: "Hyperion",
		author: "Dan Simmons",
		genre: "Sci-fi"
		}
	];

//db.Book.remove({}, function(err, books){
	//if (err) { return console.log('ERROR', err); }
	db.Book.create(books, function(err, books){
		if (err) { return console.log('ERROR', err); }
		console.log("all books:", books);
		console.log("created ", books.length, " books");
		process.exit();
	});
//});