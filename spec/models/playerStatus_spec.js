
var PlayerStatus = require('../../models/playerStatus.js');

describe('PlayerStatus', function() {
  
  describe('new', function() {
    
    it('can be instantiated', function() {
      var playerStatus = new PlayerStatus();
      expect(playerStatus).toBeDefined();
    });
  });
});