// card model

var mongoose = require('mongoose'),
    Schema   = mongoose.Schema,
    ObjectId = Schema.ObjectId;

var cardSchema = new Schema({
  name:         String,
  cardType:     String,
  cost:         Number,
  description:  String,
  value:        Number
});

module.exports = mongoose.model('Card', cardSchema);