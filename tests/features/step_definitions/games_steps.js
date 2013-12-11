function pageLoaded(window) {
  return window.document.querySelector('body');
}


var gamesSteps = function() {
  this.World = require('../support/world.js').World;

  this.Given(/^I click "([^"]*)"$/, function(text, next) {
    var self = this;
    this.browser.clickLink(text, function() {
      next();
    });
  });

  this.Then(/^I should see "([^"]*)" as the header$/, function(text, next) {
    var h1 = this.browser.text('h1');
    if (h1 === text)
      next();
    else
      next.fail(new Error('Text does not match. H1: '+h1+', text: '+text));
  });
  this.Given(/^I press "([^"]*)"$/, function(next) {
    var self = this;
    this.browser.wait(pageLoaded, function() {
      self.browser.pressButton("Create Game", function() {
        next();
      });
    });
  });
};

module.exports = gamesSteps;