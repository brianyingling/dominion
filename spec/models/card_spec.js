var Card = require('../../models/card.js');

describe('Card', function() {
  var victoryNames  = ['Estate','Duchy','Province'],
      treasuryNames = ['Gold','Silver','Copper'];

  var card = new Card();

  describe('.new', function() {
    it('can be instantiated', function() {
      expect(card).toBeDefined();
    });
  });

  describe('general properties', function() {

    var properties = {
      name:     'Gold',
      cardType: 'Treasure',
      cost:     6,
      value:    3
    };
    
    card = new Card(properties);
    
    it('has a name', function() {
      expect(card.name).toBeDefined();
      expect(card.name).toEqual(properties.name);
    });
    it('has a value', function() {
      expect(card.value).toBeDefined();
      expect(card.value).toEqual(properties.value);
    });
    it('has a card type', function() {
      expect(card.cardType).toBeDefined();
      expect(card.cardType).toEqual(properties.cardType);
    });
    it('has a cost', function() {
      expect(card.cost).toBeDefined();
      expect(card.cost).toEqual(properties.cost);
    });

  });

  describe('treasure card properties', function() {
    var properties = {};
    
    beforeEach(function() {
      properties = {
        name:     'Silver',
        cardType: 'Treasure',
        cost:     6,
        value:    3
      };
    
      card = new Card(properties);
    });
    
    it('has a name of either copper, silver, or gold', function() {
      expect(card.name).toBeDefined();
      expect(treasuryNames.indexOf(card.name)).toBeGreaterThan(-1);
    });

    it('has a card type of treasure', function() {
      expect(card.cardType).toBeDefined();
      expect(card.cardType).toEqual(properties.cardType);
    });

    it('has a value if it is a treasure card', function() {
      expect(card.value).toBeDefined();
      expect(card.cardType).toEqual('Treasure');
      expect(card.value).toEqual(properties.value);
    });
  });

  describe('action card properties', function() {
    var properties = {};
    
    beforeEach(function() {
      properties = {
        name:       'Market',
        cardType:   'Action',
        description:'+1 Card, +1 Action, +1 Buy, +1 Coin',
        cost:       5
      };

      card = new Card(properties);
    });

    it('has a description', function() {
      expect(card.description).toBeDefined();
    });

  });





});