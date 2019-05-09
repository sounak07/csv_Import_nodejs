const express = require('express');
const csv = require('fast-csv');
const router = express.Router();
const mongoose = require('mongoose');
const fs = require('fs');
var Movie = mongoose.model('Movie');

const csvfile = __dirname + '/../public/files/imdb.csv';
const stream = fs.createReadStream(csvfile);

router
  .get('/', function(req, res, next) {
    res.render('index', { title: 'Movies Project' });
  })
  .get('/import', function(req, res, next) {
    var movies = [];

    var csvStream = csv()
      .on('data', function(data) {
        var item = new Movie({
          title: data[1],
          rating: data[2],
          TotalVotes: data[3],
          genre1: data[4],
          genre2: data[5],
          genre3: data[6],
          critic: data[7],
          budget: data[8],
          runtime: data[9]
        });

        item.save(function(error) {
          console.log(item);
          if (error) {
            throw error;
          }
        });
      })
      .on('end', function() {
        console.log(' End of file import');
      });

    stream.pipe(csvStream);
    res.json({ success: 'Data imported successfully.', status: 200 });
  })
  .get('/fetchdata', function(req, res, next) {
    Movie.find({}, function(err, docs) {
      if (!err) {
        res.json({ success: 'Updated Successfully', status: 200, data: docs });
      } else {
        throw err;
      }
    });
  });
module.exports = router;
