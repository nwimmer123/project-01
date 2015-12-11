var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var BookSchema = new Schema({
  contributor: String,
  title: String,
  author: String,
  genre: String,
});

var Book = mongoose.model('Book', BookSchema);

module.exports = Book;