// Game model

var mongoose = require('mongoose'),
    Schema   = mongoose.Schema,
    ObjectId = Schema.ObjectId;

var gameSchema = new Schema({
  title: {type: String}
});

module.exports = mongoose.model('Game', gameSchema);