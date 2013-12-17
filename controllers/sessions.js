var User = require('../models/user.js');

exports.new = function (req, res) {
  res.render('sessions/new');
};

exports.create = function(req, res) {
  
  User.findOne({email: req.body.user.email}, function(err, user) {
    if (err) return done(err);

    if (!user)
      return done(null, false, {message: 'Incorrect username'});
    
    if (user.password === user.encryptPassword(req.body.user.password)) {
      req.session.user = user;
      res.redirect('/users/'+user.id);
    }
    else {
      res.render('sessions/new');
    }
  });
};

exports.destroy = function(req, res) {
  req.session.destroy();
  res.redirect('/');
};