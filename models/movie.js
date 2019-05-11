const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const movieSchema = new Schema({
  Title: {
    type: String,
    required: true
  },
  Rating: {
    type: String
    // required: true
  },
  TotalVotes: {
    type: String
    // required: true
  },
  Genre1: {
    type: String
    // required: true
  },
  Genre2: {
    type: String
    // required: true
  },
  Genre3: {
    type: String
    // required: true
  },
  MetaCritic: {
    type: String
    // required: true
  },
  Budget: {
    type: String
    // required: true
  },
  Runtime: {
    type: String
    // required: true
  }
});

module.exports = mongoose.model('Movie', movieSchema);
