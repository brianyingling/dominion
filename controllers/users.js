
var User = require('../models/user.js');
var hash = require('../lib/pass').hash;


exports.index = function(req, res) {
  debugger;
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
    firstName: user.firstName,
    lastName:  user.lastName,
    email:     user.email
  });
  
  user.password = user.encryptPassword(req.body.user.password);

  // hash(req.body.user.password, function (err, salt, hash) {
  //   if (err) throw err;
  //   user.salt = salt;
  //   user.hash = hash.toString();
  // });

  user.save(function(err) {
    if (err) {
      console.error('Error: Could not save:' + err);
      res.render('users/new');
    } else {
      res.redirect('users/');
    }
  });
};