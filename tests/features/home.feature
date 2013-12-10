Feature: Home Page feature
  As a user
  I want to visit the Home Page

  Scenario: Visit Home Page
    Given a variable set to 1
    When I am on the Home Page
    Then I should see "Express" as the page title