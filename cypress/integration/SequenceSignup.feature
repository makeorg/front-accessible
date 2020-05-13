Feature: Signup card
  I want to signup on signup card
  Scenario: Display signup card
    Given I am on "sequence page" of the question "question-3-slug"
    And card "4" is a signup card
    When I go to card "4"
    Then I see "Recevez les résultats de la consultation et soyez informé(e) des actions à venir" in the current card
    And I see "Je m'identifie avec" in the current card
    And I see "J‘ai déjà un compte.Connexion" in the current card
    And I see signup buttons in the current card
