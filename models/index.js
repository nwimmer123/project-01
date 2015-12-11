var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/tunely_test");
var Book = require('./book');

module.exports.Book = Book;

