var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var logger = require('morgan');
var mongoose = require('mongoose');
var PORT = process.env.PORT || 3000;
app.use(logger('dev'));
app.use(bodyParser.urlencoded({
	extended: false
}));
app.use(express.static('public'));



//Database configuration
mongoose.connect('mongodb://heroku_5137sd5x:op2bvdo5llfctemo41eulaltc4@ds021343.mlab.com:21343/heroku_5137sd5x');
var db = mongoose.connection;

db.on('error', function (err) {
console.log('Mongoose Error: ', err);
});
db.once('open', function () {
console.log('Mongoose connection successful.');
});

//Require Schemas
 var Saved = require('./app/components/Saved.js');
// var Article = require('./models/Article.js');


// Routes
app.get('/', function(req, res) {
  res.send(index.html);
});

app.listen(PORT , function() {
  console.log('App running on port:'+ 3000);
});