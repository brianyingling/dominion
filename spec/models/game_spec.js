var Game = require('../../models/game.js');
var User = require('../../models/user.js');

describe('Game', function() {
  
  var game = new Game();
  beforeEach(function() {
    game.title         = 'Test Game Title';
    game.maxNumPlayers = 4;
  });

  describe('properties', function() {
    
    it('has a game title', function() {
      expect(game.title).toEqual('Test Game Title');
    });
    it('has a max number of players', function() {
      expect(game.maxNumPlayers).toEqual(4);
    });
    it("has a isActive status of 'false' as a default", function() {
      expect(game.isActive).toEqual(false);
    });
    it("is not equal to true by default", function() {
      expect(game.isActive).toNotEqual(true);
    });
    it('is not yet won by default', function() {
      expect(game.isWon).toEqual(false);
      expect(game.isWon).toNotEqual(true);
    });
    it('does not yet have a winner', function() {
      expect(game.winner).toBeNull();
    });
    it('does not yet have a turn token', function() {
      expect(game.turnToken).toBeNull();
    });
  });

  describe('.patrons', function() {
    it('contains the user ids of those in the room', function() {
      var user_id1 = 'ceare32w34sdfa3',
          user_id2 = 'eareavertawrer4';

      game.patrons.push(user_id1);
      game.patrons.push(user_id2);

      expect(game.patrons[0]).toEqual(user_id1);
      expect(game.patrons[1]).toEqual(user_id2);
    });
  });

  describe('.addPatron', function() {
    var user;

    beforeEach(function() {
      user = new User({
        firstName: 'Bob',
        lastName:  'Smith',
        email:     'bob@bob.bom',
        password:  'password'
      });
      user.save();
    });
    it('adds a user to the list of patrons in the game', function() {
      game.addPatron(user.id);
      len = game.patrons.length;
      expect(game.patrons[len-1]).toEqual(user.id);
    });
  });

});
