function pageLoaded(window) {
  return window.document.querySelector('body');
}

var registerSteps = function() {
  this.World = require('../support/world.js').World;

  this.Given(/^I press 'Sign Up'$/, function(next) {
    // express the regexp above with the code you wish you had
    this.browser.clickLink('Sign Up', function() {});
    next();
  });

  this.Then(/^I should see "([^"]*)"$/, function(title, next) {
    var self = this;
    this.browser.wait(pageLoaded, function() {
      var h1 = self.browser.text('h1');
      if (title === h1)
        next();
      else
        next.fail(new Error('Error: Expected to see '+title+', Instead saw: '+h1));
    });
  });

  this.Given(/^I fill in "([^"]*)" with "([^"]*)"$/, function(field, value, next) {
    var self = this;
    this.browser.wait(pageLoaded, function() {
      self.browser.fill(field, value);
      next();
    });
  });

  this.Given(/^I press 'Create User'$/, function(next) {
    var self = this;
    this.browser.wait(pageLoaded, function() {
      self.browser.pressButton('Create User', function() {
          next();
      });
    });
  });

};

module.exports = registerSteps;