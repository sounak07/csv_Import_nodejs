const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const movieSchema = new Schema({
  Title: {
    type: String,
    required: true
  },
  Rating: {
    type: String
  },
  TotalVotes: {
    type: String
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
    type: String
  },
  Budget: {
    type: String
  },
  Runtime: {
    type: String
  }
});

module.exports = mongoose.model('Movie', movieSchema);
