var User = require('../models/user.js');

exports.new = function (req, res) {
  res.render('sessions/new');
};

exports.create = function(req, res) {
  User.findOne({email: req.body.user.email}, function(err, user) {
    if (err) return err;

    // make sure login is correct; otherwise re-render login page
    if (user && user.password === user.encryptPassword(req.body.user.password)) {
      req.session.user = {
        user_id:   user.id,
        firstName: user.firstName
      };
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