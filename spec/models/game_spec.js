var Game = require('../../models/game.js');

describe('Game', function() {
  describe('properties', function() {
    var game = new Game();
    beforeEach(function() {
      game.title = 'Test Game Title';
    });
    it('has a game title', function() {
      expect(game.title).toEqual('Test Game Title');
    });
  });
});
