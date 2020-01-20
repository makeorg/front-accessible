Feature: Propose on sequence
  I want to propose on sequence
  Background:
    Given fix auto cypress scroll
  Scenario: focus input
    Given I am on "sequence page" of the question "question-0-slug"
    And I don't see the propose note section
    And I don't see the link "notre charte de modération"
    When I focus "proposal" field
    Then I see the propose note section
    And I see "Pour en savoir plus sur notre charte de modération" in "main" container
    And The link "^notre charte de modération$" to "https://about.make.org/moderation" in "main" container exists
    And I see a button "back-to-proposals" in "main" container with label "^Revenir aux propositions$"
    And I see a button "back-to-proposals-arrow" in "main" container
    When I click on "back-to-proposals" of the sequence
    Then I don't see the link "notre charte de modération"
  Scenario: submit button activation
    Given I am on "sequence page" of the question "question-0-slug"
    And the "proposal-submit" button is disabled
    When I type "tes" in field "proposal"
    Then the "proposal-submit" button is disabled
    When I type "t" in field "proposal"
    Then the "proposal-submit" button is enabled