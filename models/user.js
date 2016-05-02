var mongoose = require('mongoose');
var	Schema = mongoose.Schema;

var Book = require('./book');

var UserSchema = new Schema({
	username: String,
	password: String,
	books: [Book.schema]
}, {
  collection: 'userInfo'
});

var UserDetails = mongoose.model('userInfo', UserSchema);



