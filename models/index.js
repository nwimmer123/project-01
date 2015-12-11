var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/project-01_test");
var Book = require('./book');

module.exports.Book = Book;

