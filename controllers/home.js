
/*
 * GET home page.
 */

exports.index = function(req, res){
  console.log("session: " + req.session);
  res.render('index', { title: 'Dominion', user: req.session.user });
};