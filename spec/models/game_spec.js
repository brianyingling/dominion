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


  // start() does the following:
  // 1. converts the first x number of patrons to players, where x is the maxNumPlayers
  // 2. creates playerStatues for each player
  // 3. delivers to each player a deck of cards
  // 4. prepares the board -- the available number of cards to purchase
  describe('.start', function() {
    it('starts the game', function() {

    });
  });

});
