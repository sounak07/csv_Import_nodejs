const express = require('express');
const flash = require('connect-flash');
const path = require('path');
const mongoose = require('mongoose');
require('./models/movie');

const index = require('./routes/index');
const graph = require('./routes/graph');
const types = require('./routes/types');
const results = require('./routes/results');


const app = express();

mongoose.Promise = global.Promise;
mongoose
  .connect('mongodb://sounak:Sounak08*@ds153766.mlab.com:53766/movies-imdb', { useUrlParser: true })
  .then(() => console.log('Mongo success'))
  .catch(err => console.log(err));

app.use(express.static(path.join(__dirname, 'public')));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(flash());

app.use('/', index);
app.use('/graph', graph);
app.use('/types', types);
app.use('/results', results);


app.listen(3000);
