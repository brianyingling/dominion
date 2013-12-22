exports.isAuthorized = function(req, res, next) {
  return req.session ? next() : res.redirect('/login');
};