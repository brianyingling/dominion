
/*
 * GET home page.
 */

exports.index = function(req, res){
  console.log(req.session);
  res.render('index', { title: 'Dominion', session: req.session });
};