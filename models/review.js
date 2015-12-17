var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var ReviewSchema = new Schema({
	reviewer: String,
	review: String,
	date: String
});

var Review = mongoose.model('Review', ReviewSchema);

module.exports = Review;
