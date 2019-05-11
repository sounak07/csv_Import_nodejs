const express = require('express');
const csv = require('fast-csv');
const router = express.Router();
const mongoose = require('mongoose');
const fs = require('fs');
var Movie = mongoose.model('Movie');

const csvfile = __dirname + '/../public/files/imdb.csv';
const stream = fs.createReadStream(csvfile);

router
  .get('/', function (req, res, next) {
    res.render('index', { title: 'Movies Project' });
  })
  .get('/import', function (req, res, next) {
    var movies = [];

    csv
      .fromStream(stream, { headers: true })
      .on('data', function (data) {
        var item = new Movie(data);
        item.save().then(result => {
          console.log(result);
          res
            .status(200)
            .json({
              success: 'csv added successfully'
            })
            .catch(error => {
              console.log(error);
              res.status(500).json({
                error: err
              });
            });
        });
      })
      .on('end', function () {
        console.log(' End of file import');
      });
  })
  .get('/fetchdata', function (req, res, next) {
    Movie.find({}, function (err, docs) {
      if (!err) {
        res.json({ data: docs });
      } else {
        throw err;
      }
    });
  });
module.exports = router;
