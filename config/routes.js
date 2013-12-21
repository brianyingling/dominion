module.exports = function(config) {
  var app   = config.app;
  var auth  = config.auth;
  var home  = config.controllers.home;
  var users = config.controllers.users;
  var games = config.controllers.games;
  var sessions = config.controllers.sessions;
  
  // home page
  app.get('/', home.index);

  // login
  app.get('/login',   sessions.new);
  app.post('/login',  sessions.create);
  app.get('/logout',  sessions.destroy);

  // /users
  app.get('/users',     auth.isAuthorized, users.index);
  app.get('/users/new', auth.isAuthorized, users.new);
  app.get('/users/:id', auth.isAuthorized, users.show);
  app.post('/users',    auth.isAuthorized, users.create);

  // /games
  app.get('/games',     auth.isAuthorized, games.index);
  app.get('/games/new', auth.isAuthorized,  games.new);
  app.post('/games',    auth.isAuthorized, games.create);
};