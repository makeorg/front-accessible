Feature: The Home Page
  I want to open the Make.org home page
  Scenario: Opening the make.org website
    Given I open home page
    Then I see "Make.org" in the title
    And I see a sequence with "14" cards
