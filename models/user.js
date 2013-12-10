var mongoose  = require('mongoose'),
    Schema    = mongoose.Schema,
    ObjectId  = Schema.ObjectId;


var userSchema = new Schema({
  firstName: {type: String},
  lastName:  {type: String}
});

module.exports = mongoose.model('User', userSchema);