Feature: Registration
  As a Visitor
  I want to register as a new user

  Scenario: Visiting New User Page
    Given I am on the Home Page
    And I press 'Sign Up'
    Then I should see "New User"

  Scenario: Registering a New User
    Given I am on the Home Page
    And I press 'Sign Up'
    And I fill in "user[firstName]" with "Bob"
    And I fill in "user[lastName]" with "Jones"
    And I press 'Create User'
    Then I should see "Users"

  Scenario: Logging In
    Given I am on the Home Page
    And I click "Login"
    And I fill in "user[email]" with "mj@mj.com"
    And I fill in "user[password]" with "mj"
    And I press "Log In"
    Then I should see "Welcome Michael"

    