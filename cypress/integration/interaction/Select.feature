Feature: Select command

  Background:
    Given I go to "Select" menu

  Scenario: Select Hamster
    Given I select Hamster in the selection

  Scenario: Select Oranges in multiple selection
    Given I select Oranges in the multiple selection

  Scenario: Select Pineapple, Bananas and Oranges in multiple selection
    Given I select Pineapple, Bananas and Oranges in the multiple selection
