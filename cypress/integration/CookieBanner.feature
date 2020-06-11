Feature: The Cookie Banner
  I want to check Cookie Banner right behavior

  Scenario: Check Cookie banner links
    Given I go to "france deprecated homepage"
    And I see a link "conditions d’utilisation" to "/FR-fr/conditions-dutilisation" in "cookie-banner" container
    And I see a link "charte de données personnelles" to "/FR-fr/politique-donnees" in "cookie-banner" container
    When I click on "gtu" link
    Then I see the "general terms of use" page
    When I click on "policy" link
    Then I see the "data policy" page


  Scenario: Accept cookie policy
    Given I go to "france deprecated homepage"
    And I see a button "cookie accept" in "cookie-banner" container
    When I click on "cookie accept" button
    Then I accept the cookie policy
    And I don't see cookie banner
    
  Scenario: Cookie policy has already been accepted
    Given I have already accepted the cookie policy
    And I go to "france deprecated homepage"
    Then I don't see cookie banner