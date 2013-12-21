
/**
 * Module dependencies.
 */

var express     = require('express');
var http        = require('http');
var path        = require('path');
var mongoose    = require('mongoose');

// controllers
var home     = require('./controllers/home');
var users    = require('./controllers/users');
var games    = require('./controllers/games');
var sessions = require('./controllers/sessions');

// sessions
var passport      = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var auth          = require('./lib/auth');

var app = express();
mongoose.connect('mongodb://localhost/dominion');


// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.bodyParser());
app.use(express.cookieParser());
app.use(express.session({ secret:'dominion' }));
app.use(passport.initialize());
app.use(passport.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// passport configuration
passport.use(new LocalStrategy(
  function( email, password, done ){
    User.findOne({email: email}, function(err, user) {
      if (err) return done(err);
      if (!user) {
        return done(null, false,{message: 'Incorrect username'});
      }
      if (!user.encryptPassword(password)) {
        return done(null, false, {message: 'Incorrect password'});
      }
      return done(null, user);

    });
  }
  ));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

var config = {
  app:  app,
  auth: auth,
  controllers: {
    home:    home,
    users:   users,
    games:   games,
    sessions: sessions
  }
};

// routes file
require('./config/routes') (config);


http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
