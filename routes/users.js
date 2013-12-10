
var User = require('../models/user.js');

exports.index = function(req, res) {
  User.find({}, function(err, data) {
    console.log(data);
    res.render('users/index', {users: data});
  });
};