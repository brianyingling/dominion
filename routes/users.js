
var User = require('../models/user.js');

exports.index = function(req, res) {
  User.find({}, function(err, data) {
    console.log(data);
    res.render('users/index', {users: data});
  });
};

exports.show = function(req, res) {
  User.findById(req.params.id, function(err, user) {
    res.render('users/show', {user: user});
  });
};

exports.new = function(req, res) {
  res.render('users/new');
};

exports.create = function(req, res) {
  user = req.body.user;
  user = new User({
    firstName: req.body.user.firstName,
    lastName:  req.body.user.lastName
  });
  user.save(function(err) {
    if (err) {
      console.error('Error: Could not save:' + err);
      res.render('users/new');
    } else {
      res.redirect('users/');
    }
  });
};