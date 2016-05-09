// var mongoose = require('mongoose');
// var	Schema = mongoose.Schema;

// var Book = require('./book');

// var UserSchema = new Schema({
// 	username: String,
// 	password: String,
// 	books: [Book.schema]
// }, {
//   collection: 'userInfo'
// });

// var UserDetails = mongoose.model('userInfo', UserSchema);

// app/models/user.js
// load the things we need
var mongoose = require('mongoose');
var bcrypt   = require('bcrypt-nodejs');

var Book = require('./book');

// define the schema for our user model
var userSchema = mongoose.Schema({

    local            : {
        email        : String,
        password     : String,
        books        : [Book.schema]
    },

});

// methods ======================
// generating a hash
userSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

// checking if password is valid
userSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.local.password);
};

// create the model for users and expose it to our app
module.exports = mongoose.model('User', userSchema);



