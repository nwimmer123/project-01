var mongoose = require("mongoose");
mongoose.connect('mongodb://localhost/project-01');
//heroku connection
// mongoose.connect( process.env.MONGOLAB_URI ||
//                   process.env.MONGOHQ_URL ||
//                   "mongodb://localhost/project-01_test" );

var Book = require('./book');
var User = require('./user');
var Review = require('./review');

module.exports.Book = require('./book.js');

module.exports.User = User;
module.exports.Review = Review;