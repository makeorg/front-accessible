Feature: Accessibility
  I want to check accessibility

  Scenario: Check HTML validity
  Given I go to "france homepage"
  Then html page should be valid
  When I click on "mobile-header-menu" button
  Then html page should be valid
  When I click on "mobile-header-close-menu" button
  And I click on "mobile-search" button
  Then html page should be valid
  When I click on "mobile-header-close-menu" button
  And I click on "login" button
  Then html page should be valid