Feature: Signup card
  I want to signup on signup card
  Scenario: Display signup card
    Given I am on the sequence page of the question "question-3-slug"
    When I go to card "5"
    Then card "5" is a signup card
    Then I see "Recevez les résultats de la consultation" in the current card
    And I see "Je m'identifie avec" in the current card
    And I see "J’ai déjà un compte, je me connecte." in the current card
    And I see signup buttons in the current card
