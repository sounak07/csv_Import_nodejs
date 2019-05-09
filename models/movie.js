var mongoose = require(mongoose);

var Schema = mongoose.Schema;
var movieSchema = new Schema({
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

var Movie = mongoose.model('Movie', movieSchema);
module.exports = { Movie };
