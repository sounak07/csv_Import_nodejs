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
    res.render('index', { title: 'Import CSV file using NodeJS' });
  })
  .get('/import', function(req, res, next) {
    var movies = [];

    var csvStream = csv()
      .on('data', function(data) {
        var item = new Movie({
          title: data[0],
          rating: data[1],
          TotalVotes: data[2],
          genre1: data[3],
          genre2: data[4],
          genre3: data[5],
          critic: data[6],
          budget: data[7],
          runtime: data[8]
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
