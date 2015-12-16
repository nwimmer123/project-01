var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/project-01_test");

var Book = require('./book');
var User = require('./user');
var Review = require('./review');

module.exports.Book = require('./book.js');

module.exports.User = User;
module.exports.Review = Review;