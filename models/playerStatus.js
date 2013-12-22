// Player Status model

var mongoose = require('mongoose'),
    Schema   = mongoose.Schema,
    ObjectId = Schema.ObjectId;

var playerStatusSchema = new Schema({
  user_id: Number,
  deck:    Array,
  hand:    Array,
  turns:   Array
});

playerStatusSchema.methods = {

  turn: function() {
    return this.turns[this.turns.length-1];
  }
};

module.exports = mongoose.model('PlayerStatus', playerStatusSchema);