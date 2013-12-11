var User = require('../../models/user.js');

describe('User', function() {
  describe('properties', function() {
    var user = new User();
    
    beforeEach(function() {
      user.firstName = 'Brian';
      user.lastName  = 'Yingling';
    });
    
    it('can have a first name', function() {
      expect(user.firstName).toEqual('Brian');
    });
    
    it('can have a last name', function() {
      expect(user.lastName).toEqual('Yingling');
    });
    
    it('can be saved', function() {
      user.save();
      user.firstName = 'Joe';
      user.save();
      expect(user._id).not.toBeNull();
      expect(user.firstName).toEqual('Joe');
    });
  });
});