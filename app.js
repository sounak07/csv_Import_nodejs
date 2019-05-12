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

app.use((req, res, next) => {    //CORS 

  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin,X-Requested-With,Content-Type,Accept');
  res.header('Access-Control-Allow-Methods', 'POST, PUT, GET, OPTIONS,DELETE');
  next();
});


mongoose.Promise = global.Promise;
mongoose
  .connect('mongodb://sounak:Sounak08*@ds153766.mlab.com:53766/movies-imdb', { useNewUrlParser: true })
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
