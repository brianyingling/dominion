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
      var h1 = self.browser.text('body');
      if (h1.indexOf(title) !== -1)
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

  this.Given(/^I am Logged In$/, function(next) {
    var self = this;
    this.visit('http://localhost:3000/login');
    this.browser.wait(pageLoaded, function() {
      self.browser.fill("user[email]", "mj@mj.com");
      self.browser.fill("user[password]", "mj");
      self.browser.pressButton('Log In', function(){

        self.browser.wait(pageLoaded, function() {
          var nav = self.browser.html('nav');
          if (nav.indexOf('Michael') !== -1)
            next();
          else
            next(new Error("Error: Not logged in. Nav is: "+nav));
        });
      });
    });
  });

};

module.exports = registerSteps;