// Game model

var mongoose = require('mongoose'),
    Schema   = mongoose.Schema,
    ObjectId = Schema.ObjectId;

var gameSchema = new Schema({
  title:         String,
  maxNumPlayers: Number,
  players:       Array,
  cards:         Array,
  isActive:      {type: Boolean, default: false},
  isWon:         {type: Boolean, default: false},
  winner:        String,
  turnToken:     String
});

module.exports = mongoose.model('Game', gameSchema);