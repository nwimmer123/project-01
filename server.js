// SERVER-SIDE JAVASCRIPT

//require express in our app
var express = require('express');
// generate a new express app and call it 'app'
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

// serve static files from public folder
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: true }));

/************
 * DATABASE *
 ************/

var db = require('./models');

/**********
 * ROUTES *
 **********/

app.get('/', function homepage (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});



/**********
 * SERVER *
 **********/

// listen on port 3000
app.listen(process.env.PORT || 3000, function () {
  console.log('Express server is running on http://localhost:3000/');
});
