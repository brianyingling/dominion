
exports.index = function(req, res) {
  res.render('games/index', {title:'Games'});
};

exports.new = function(req, res) {
  res.render('games/new', {title: 'New Game'});
};

exports.create = function(req, res) {

};