Feature: The Sequence
  I want to interact with sequence

  Scenario: Cannot pass to the next card if we don't vote
    Given I open home page
    When I click into start sequence
    And I see proposal "1"
    Then I Cannot pass to the next card

  Scenario: Qualify a proposal
    Given I open home page
    When I click into start sequence
    And I see proposal "1"
    And I vote "D'accord" on proposal "1"
    And I qualify "Réaliste" on proposal "1"
    Then Qualification count of "Réaliste" in first proposal should be greatter than 0
    When I pass to the next card from proposal "1"
    Then I see proposal "2"

  Scenario: See the final card and go to consultation page
    Given I open home page
    When I click into start sequence
    And I vote on all cards of the sequence with "D'accord"
    Then I see final card
    And The button see all proposals should redirected to consultation page
