// User model

var mongoose  = require('mongoose'),
    crypto    = require('crypto'),
    Schema    = mongoose.Schema,
    ObjectId  = Schema.ObjectId;

var userSchema = new Schema({
  firstName: {type: String},
  lastName:  {type: String},
  email:     {type: String},
  salt:      {type: String, default: 'Hahaha'},
  password:  {type: String}
});

userSchema.methods = {

  encryptPassword: function(password) {
    if (!password) return '';
    return crypto.createHmac('sha1', this.salt).update(password).digest('hex');
  }
};

module.exports = mongoose.model('User', userSchema);