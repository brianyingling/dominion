Feature: New Game
  As a User
  I Want to Create a New Game

  Scenario: Visit New Game Page
    Given I am Logged In
    And I am on the Home Page
    And I click "New Game"
    Then I should see "New Game" as the header

  Scenario: Creating a New Game
    Given I am Logged In
    And I am on the Home Page
    And I click "New Game"
    And I fill in "game[title]" with "My First New Game"
    And I press "Create Game"
    Then I should see "My First New Game" listed

Feature: View a List of Games
  As a User
  I want to join a game

  Scenario: 
  Given I am Logged In
  And I am on the Home Page
  And I click "Games"
  Then I should see "Games" as the header
