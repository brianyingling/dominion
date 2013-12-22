var Game = require('../models/game.js');
var User = require('../models/user.js');

exports.index = function(req, res) {
  console.log(req.session);
  User.findOne({id:req.session.user}, function (err, user) {
    Game.find({}, function(err, data) {
      console.log(data);
      res.render('games/index', {games:data, session: req.session});
    });
  });
};

exports.new = function(req, res) {
  res.render('games/new', {title: 'New Game', session: req.session});
};

exports.show = function(req, res) {
  var game_id = req.url.split('/')[2];
  Game.findById(game_id, function(err, game) {
    if (err) return err;
    res.render('games/show', {game: game, session: req.session});
  });
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