const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const movieSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  rating: {
    type: String,
    required: true
  },
  TotalVotes: {
    type: Number,
    required: true
  },
  genre1: {
    type: String,
    required: true
  },
  genre2: {
    type: String,
    required: true
  },
  genre3: {
    type: String,
    required: true
  },
  critic: {
    type: Number,
    required: true
  },
  budget: {
    type: String,
    required: true
  },
  runtime: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Movie', movieSchema);
