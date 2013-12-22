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
    var h2 = this.browser.text('h2');
    if (h2 === text)
      next();
    else
      next.fail(new Error('Text does not match. H1: '+h2+', text: '+text));
  });
  this.Given(/^I press "([^"]*)"/, function(text, next) {
    var self = this;
    this.browser.wait(pageLoaded, function() {
      self.browser.pressButton(text, function() {
        next();
      });
    });
  });
  this.Then(/^I should see "([^"]*)" listed$/, function(text, next) {
    var self = this;
    this.browser.wait(pageLoaded, function() {
      var p = self.browser.html('p');
      if (p.indexOf(text) != -1)
        next();
      else
        next(new Error("Error: Text was not found"));
      // write text that checks if text is included in html
    });

  });
};

module.exports = gamesSteps;