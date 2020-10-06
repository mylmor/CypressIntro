Feature: FirstEqLast command

  Background:
    Given I go to "First/Eq/Last" menu

  Scenario: Get first Button
    Given I get the first Button

  Scenario: Get second Button
    Given I get the second Button

  Scenario: Get last Button
    Given I get the last Button

  Scenario: Get the first Value
    Given I get the first Value

  Scenario: Get the last Value
    Given I get the last Value

  Scenario Outline: Get the Value number <number>
    Given I get the Value number <number>

    Examples:
    | number |
    | 1 |
    | 2 |
    | 3 |
    | 4 |
    | 5 |
    | 6 |
    | 7 |
    | 8 |
    | 9 |