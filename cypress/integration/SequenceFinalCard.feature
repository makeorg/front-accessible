Feature: Final card
  I want to see final card
  Scenario: Display final card
    Given I am on the sequence page of the question "question-3-slug"
    When I go to card "6"
    Then I see "Merci pour votre participation !" in "final-card-title" container
    And I see "Vous souhaitez aller plus loin pour agir ?" in "final-card-share" container
    And I see "Invitez vos proches et/ou votre communauté à participer" in "final-card-share" container
    And I see "Découvrez toutes les propositions." in "final-card-learn-more" container
    And I see a link "En savoir +" to "https://make.org/FR/consultation/egalite-femmes-hommes/CONSULTATION" in "final-card-learn-more" container

    