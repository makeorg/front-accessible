Feature: The Home Page
  I want to vist the Make.org home page
  Scenario: Redirect to france Homepage
    Given I go to "homepage"
    Then I should be redirect to "france deprecated homepage"
  
  Scenario: Homepage has a title
    Given I go to "france deprecated homepage"
    Then I see "Agir avec Make.org - Make.org" in the title

  Scenario: Homepage contain the featured operations
    Given I go to "france deprecated homepage"
    Then I see "En ce moment sur Make.org" as the title of the first section

  Scenario: Homepage contain the current operations
    Given I go to "france deprecated homepage"
    Then I see "Nos opérations en cours" as the title of the second section

  Scenario: Homepage contain the popular proposals
    Given I go to "france deprecated homepage"
    Then I see "Les propositions les + populaires du moment" as the title of the "popular" section

  Scenario: Homepage contain the controversial proposals
    Given I go to "france deprecated homepage"
    Then I see "Les propositions les + débattues du moment" as the title of the "controversial" section

  Scenario: Homepage contain the coprorate section
    Given I go to "france deprecated homepage"
    Then I see the first corporate bloc
    And I see the second corporate bloc

  Scenario: Homepage contain the consultation list section
    Given I go to "france deprecated homepage"
    Then I see a list of consultation
    