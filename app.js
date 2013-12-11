
/**
 * Module dependencies.
 */

var express   = require('express');
var routes    = require('./routes');
var http      = require('http');
var path      = require('path');
var mongoose  = require('mongoose');



// controllers
var users = require('./routes/users');
var games = require('./routes/games');


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
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

// define our routes

// home page
app.get('/', routes.index);

// /users
app.get('/users',     users.index);
app.get('/users/new', users.new);
app.get('/users/:id', users.show);
app.post('/users',    users.create);


// /games

app.get('/games',     games.index);
app.get('/games/new', games.new);
app.post('/games',    games.create);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
