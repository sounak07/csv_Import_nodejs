var express = require('express');
const flash = require('connect-flash');

const mongoose = require('mongoose');

var server = require('http').Server(app);
var app = express();

mongoose.Promise = global.Promise;
mongoose.connect(
  'mongodb://sounak:Sounak08*@ds153766.mlab.com:53766/movies-imdb'
);

var index = require('./routes/index');

app.use(express.static(__dirname + '/public'));
app.set('view engine', 'pug');

app.use(flash());

app.use('/', index);

server.listen(3000);
