var mongoose = require('mongoose'),
	Schema = mongoose.Schema,
	passportLocalMongoose = 
	require('passport-local-mongoose');

var userShema = new Schema({
	username: String,
	password: String,
	contributorName: String
});

