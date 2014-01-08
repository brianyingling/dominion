// Game model

var mongoose = require('mongoose'),
    Schema   = mongoose.Schema,
    ObjectId = Schema.ObjectId;

var gameSchema = new Schema({
  title:         String,
  maxNumPlayers: {type: Number, default: 4},
  players:       Array,
  cards:         Array,
  isActive:      {type: Boolean, default: false},
  isWon:         {type: Boolean, default: false},
  winner:        {type: String,  default: null},
  turnToken:     {type: String,  default: null}
});

gameSchema.methods = {
  // Starts the game by:
  // 1. Creating PlayerStatuses for 1st several patrons
  // 2.
  start: function() {

  }
};

module.exports = mongoose.model('Game', gameSchema);