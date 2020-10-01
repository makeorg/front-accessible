Feature: The footer
  I want to check footer component

  Scenario: Footer is present in all pages
    Given I go to "homepage"
    Then I see "footer" container
    When I go to "sequence" page of the question "question-3-slug"
    Then I see "footer" container
    When I go to "data policy"
    Then I see "footer" container
    When I go to "browse consultations"
    Then I see "footer" container
    When I go to "browse results"
    Then I see "footer" container
    When I go to "top idea" page of the question "question-1-slug"
    Then I see "footer" container
    When I go to 404 page
    Then I see "footer" container
  
  Scenario: Footer is complete
    Given I go to "homepage"
    Then I see an external link "Revue de presse" to "https://about.make.org/les-medias-en-parlent" in "footer" container
    And I see an external link "Fonds de dotation Make.org" to "https://foundation.make.org" in "footer" container
    And I see a link "Contact" to "/FR-fr/contact" in "footer" container
    And I see a link "Mentions légales" to "/FR-fr/mentions-legales" in "footer" container
    And I see a link "Conditions d'utilisation" to "/FR-fr/conditions-dutilisation" in "footer" container
    And I see a link "Politique de données" to "/FR-fr/politique-donnees" in "footer" container
