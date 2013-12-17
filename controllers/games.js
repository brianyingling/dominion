var Game = require('../models/game.js');
var User = require('../models/user.js');

exports.index = function(req, res) {
  if (!req.session.user) {
    res.send("Not authorized to view this page");
  }
  else {
    User.findOne({id:req.session.user}, function (err, user) {
      Game.find({}, function(err, data) {
        console.log(data);
        res.render('games/index', {games:data});
      });
    });
  }
};

exports.new = function(req, res) {
  res.render('games/new', {title: 'New Game'});
};

exports.create = function(req, res) {
  game = new Game({title: req.body.game.title});
  game.save(function(err) {
    if (!err) {
      res.redirect('/games');
    } else {
      console.error('Error: Could not save' + err);
    }
  });
};