<<<<<<< HEAD
// User model

=======
>>>>>>> d4ec6a99893bae25dff8048eb8313b10ca159b67
var mongoose  = require('mongoose'),
    Schema    = mongoose.Schema,
    ObjectId  = Schema.ObjectId;


var userSchema = new Schema({
  firstName: {type: String},
  lastName:  {type: String}
});

module.exports = mongoose.model('User', userSchema);