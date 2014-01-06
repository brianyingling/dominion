function pageLoaded(window) {
  return window.document.querySelector('body');
}

var homeSteps = function() {
  this.World = require('../support/world.js').World;

  // 'this' is set to a new this.World instance
  this.givenNumber = 0;

  this.Given(/^a variable set to (\d+)$/, function(num, callback) {
    this.givenNumber = parseInt(num);
    callback();
  });

  this.When(/^I am on the Home Page$/, function(callback) {
    var self = this;
    this.browser.wait(pageLoaded, function() {
      self.visit("http://localhost:3000", callback);
    });
  });

  this.Then(/^I should see "([^"]*)" as the page title$/, function(title, callback){
    var self = this;
    this.browser.wait(pageLoaded, function() {
      var pageTitle = self.browser.text('title');

      if (title === pageTitle) {
        callback();
      } else {
        callback.fail(new Error('Expected to be on page with title: ' + title + ' Error: ' + self.browser.error));
      }
    });
  });
};

module.exports = homeSteps;

