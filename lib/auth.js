exports.isAuthorized = function(req, res, next) {
  return req.session.user ? next() : res.redirect('/login');
};