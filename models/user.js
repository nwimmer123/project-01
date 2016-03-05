var mongoose = require('mongoose');
var	Schema = mongoose.Schema;
var	passportLocalMongoose = require('passport-local-mongoose');

var Book = require('./book');

var UserSchema = new Schema({
	username: String,
	password: String,
	books: [Book.schema]
});

UserSchema.plugin(passportLocalMongoose);

var User = mongoose.model('User', UserSchema);
module.exports = User;