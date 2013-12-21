Feature: New Game
  As a User
  I Want to Create a New Game

  Scenario: Visit New Game Page
    Given I am on the Home Page
    And I click "New Game"
    Then I should see "New Game" as the header

  Scenario: Creating a New Game
    Given I am on the Home Page
    And I click "New Game"
    And I fill in "game[title]" with "My First New Game"
    And I press "Create Game"
    Then I should see "My First New Game" listed

