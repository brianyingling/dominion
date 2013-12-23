// Game model

var mongoose = require('mongoose'),
    Schema   = mongoose.Schema,
    ObjectId = Schema.ObjectId;

var gameSchema = new Schema({
  title:         String,
  maxNumPlayers: Number,
  players:       Array,
  patrons:       Array,
  cards:         Array,
  isActive:      {type: Boolean, default: false},
  isWon:         {type: Boolean, default: false},
  winner:        {type: String,  default: null},
  turnToken:     {type: String,  default: null}
});

gameSchema.methods = {
  addPatron: function(patron) {
    this.patrons.push(patron);
  }
};

module.exports = mongoose.model('Game', gameSchema);