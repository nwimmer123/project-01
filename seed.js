var db = require("./models");

var books = [
		{
		contributor: "Noah",
		title: "Reality Dysfunction",
		author: "Peter Hamilton",
		genre: "Sci-fi",
		image:"http://sfreviews.net/large_covers/reality_dysfunction.jpg",
		publicationDate: "1996",
		},
		{
		contributor: "Noah",
		title: "The Fellowship of the Ring",
		author: "J.R.R. Tolkien",
		genre: "Fantasy",
		image: "http://www.pagepulp.com/wp-content/527.jpg",
		publicationDate: "1954",
		},
		{
		contributor: "Noah",
		title: "Hyperion",
		author: "Dan Simmons",
		genre: "Sci-fi",
		image: "http://ecx.images-amazon.com/images/I/51zwyTJNlWL.jpg",
		publicationDate: "1989",
		}
	];

var reviewToPopulate = [];

reviewToPopulate.push({
	reviewer: "Noah",
	review: "My review goes here",
	date: "Today",
});

books.forEach(function(books){
	books.reviews = reviewToPopulate;
});

db.Book.remove({}, function(err, success){
	if (err) { return console.log('ERROR', err); }
	// db.Book.create(books, function(err, books){
	// 	if (err) { return console.log('ERROR', err); }
	// 	console.log("all books:", books);
	// 	console.log("created ", books.length, " books");
		process.exit();
	// });
});
