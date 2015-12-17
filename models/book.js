var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var Review = require('./review');

var BookSchema = new Schema({
  contributor: String,
  title: String,
  author: String,
  genre: String,
  image: String,
  publicationDate: String,
  publisher: String,
  synopsis: String,
  reviews: [Review.schema]
});

var Book = mongoose.model('Book', BookSchema);

module.exports = Review;
module.exports = Book;
