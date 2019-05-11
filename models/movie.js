const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const movieSchema = new Schema({
  Title: {
    type: String,
    required: true
  },
  Rating: {
    type: Number
  },
  TotalVotes: {
    type: Number
  },
  Genre1: {
    type: String
  },
  Genre2: {
    type: String
  },
  Genre3: {
    type: String
  },
  MetaCritic: {
    type: Number
  },
  Budget: {
    type: String
  },
  Runtime: {
    type: String
  }
});

module.exports = mongoose.model('Movie', movieSchema);
