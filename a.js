const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const defaultRoutes = require('./api/routes/default');
const carRoutes = require('./api/routes/cars');
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use((req, res, next) => {
  //CORS

  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin,X-Requested-With,Content-Type,Accept'
  );
  res.header('Access-Control-Allow-Methods', 'POST, PUT, GET, OPTIONS,DELETE');
  next();
});

//connection to the mongo DB
mongoose.connect(
  'mongodb+srv://ashishume:deathking@webapi-07gnb.mongodb.net/carsDB?retryWrites=true',
  { useNewUrlParser: true }
);

//routes to the respective models
app.use('/', defaultRoutes);
app.use('/cars', carRoutes);

app.use((req, res, next) => {
  const error = new Error('Not Found');
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    message: error.message
  });
});
module.exports = app;
