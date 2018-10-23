Feature: Submit a proposal
  I want to submit a proposal

  Scenario: cannot propose when the content length is samllest than the minimum allowed
    Given I open home page
    When I type a proposal Il faut "fo"
    Then The submit button is "disabled"

  Scenario: cannot propose when the content length is bigget than the maximum allowed
    Given I open home page
    When I type a proposal Il faut "foo foo foo foo foo foo foo foo foo foo foo foo foo foo foo foo foo foo foo foo foo foo foo foo foo foo foo foo foo foofoo foo foo foo foo foo"
    Then The submit button is "disabled"

  Scenario: can propose when the content length is allowed
    Given I open home page
    When I type a proposal Il faut "foo foo foo"
    Then The submit button is "enabled"

  Scenario: Type a proposal and see description
    Given I open home page
    When I begin typing a proposal
    Then I see proposal submit description

  Scenario: Submit a proposal and see authentification
    Given I open home page
    When I submit a proposal Il faut "foo foo foo"
    Then I see the proposal authentification
