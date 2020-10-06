Feature: Should command

  Background:
    Given I go to "Should" menu

  Scenario: Input should equal Input with value
    Given The input equals Input with value

  Scenario: Text area should equal Input with value
    Given The text area equals Text with value

  Scenario Outline: Type and check text
    When I type some "<text>"
    Then It should equal "<text>"

    Examples:
    |text|
    |randomtext|
    |textrandom|