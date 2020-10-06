Feature: Gauge and card position on sequence
  I want to see progression and track position 
  
  Scenario: Complete a sequence
    Given I monitor API "postTracking" requests
    And I am on the sequence page of the question "question-0-slug"
    Then card "0" is visible
    And card "0" is an intro card
    And progress gauge is not visible
    When I click on "intro card start button" of the current card
    Then card "1" is visible
    And card "1" is a proposal card
    And progress gauge is "1" on "15"
    And I don't see "next proposal" button on card "1"
    When I vote "neutral" on the current card
    Then I see "next proposal" button on card "1"
    When I click on "next proposal" of the current card
    Then event "click-sequence-next-card" should be tracked by Make with parameters values:
    | name                | value                                                               |
    | eventType           | trackCustom                                                         |
    | country             | FR                                                                  |
    | language            | fr                                                                  |
    | location            | sequence                                                            |
    | questionId          | question-0-id                                                       |
    | questionSlug        | question-0-slug                                                     |
    | referrer            | http://localhost:9009/__/                                           |
    | url                 | http://localhost:9009/FR/consultation/question-0-slug/selection  |
    And card "2" is visible
    And card "2" is a proposal card
    And progress gauge is "2" on "15"
    And I don't see "next proposal" button on card "2"
    When I vote "neutral" on the current card
    Then I see "next proposal" button on card "2"
    When I click on "next proposal" of the current card
    Then event "click-sequence-next-card" should be tracked by Make with parameters values:
    | name                | value                                                               |
    | eventType           | trackCustom                                                         |
    | country             | FR                                                                  |
    | language            | fr                                                                  |
    | location            | sequence                                                            |
    | questionId          | question-0-id                                                       |
    | questionSlug        | question-0-slug                                                     |
    | referrer            | http://localhost:9009/__/                                           |
    | url                 | http://localhost:9009/FR/consultation/question-0-slug/selection  |
    And card "3" is visible
    And card "3" is a proposal card
    And progress gauge is "3" on "15"
    And I don't see "next proposal" button on card "3"
    When I vote "neutral" on the current card
    Then I see "next proposal" button on card "3"
    When I click on "next proposal" of the current card
    Then event "click-sequence-next-card" should be tracked by Make with parameters values:
    | name                | value                                                               |
    | eventType           | trackCustom                                                         |
    | country             | FR                                                                  |
    | language            | fr                                                                  |
    | location            | sequence                                                            |
    | questionId          | question-0-id                                                       |
    | questionSlug        | question-0-slug                                                     |
    | referrer            | http://localhost:9009/__/                                           |
    | url                 | http://localhost:9009/FR/consultation/question-0-slug/selection  |
    And card "4" is visible
    And card "4" is a proposal card
    And progress gauge is "4" on "15"
    And I don't see "next proposal" button on card "4"
    When I vote "neutral" on the current card
    Then I see "next proposal" button on card "4"
    When I click on "next proposal" of the current card
    Then event "click-sequence-next-card" should be tracked by Make with parameters values:
    | name                | value                                                               |
    | eventType           | trackCustom                                                         |
    | country             | FR                                                                  |
    | language            | fr                                                                  |
    | location            | sequence                                                            |
    | questionId          | question-0-id                                                       |
    | questionSlug        | question-0-slug                                                     |
    | referrer            | http://localhost:9009/__/                                           |
    | url                 | http://localhost:9009/FR/consultation/question-0-slug/selection  |
    And card "5" is visible
    And card "5" is a proposal card
    And progress gauge is "5" on "15"
    And I don't see "next proposal" button on card "5"
    When I vote "neutral" on the current card
    Then I see "next proposal" button on card "5"
    When I click on "next proposal" of the current card
    Then event "click-sequence-next-card" should be tracked by Make with parameters values:
    | name                | value                                                               |
    | eventType           | trackCustom                                                         |
    | country             | FR                                                                  |
    | language            | fr                                                                  |
    | location            | sequence                                                            |
    | questionId          | question-0-id                                                       |
    | questionSlug        | question-0-slug                                                     |
    | referrer            | http://localhost:9009/__/                                           |
    | url                 | http://localhost:9009/FR/consultation/question-0-slug/selection  |
    And card "6" is visible
    And card "6" is a proposal card
    And progress gauge is "6" on "15"
    And I don't see "next proposal" button on card "6"
    When I vote "neutral" on the current card
    Then I see "next proposal" button on card "6"
    When I click on "next proposal" of the current card
    Then event "click-sequence-next-card" should be tracked by Make with parameters values:
    | name                | value                                                               |
    | eventType           | trackCustom                                                         |
    | country             | FR                                                                  |
    | language            | fr                                                                  |
    | location            | sequence                                                            |
    | questionId          | question-0-id                                                       |
    | questionSlug        | question-0-slug                                                     |
    | referrer            | http://localhost:9009/__/                                           |
    | source              | core                                                                |
    | url                 | http://localhost:9009/FR/consultation/question-0-slug/selection  |
    And card "7" is visible
    And card "7" is a push proposal card
    And progress gauge is "7" on "15"
    And I see "push proposal next" button on card "7"
    When I click on "push proposal next" of the current card
    Then event "click-proposal-push-card-ignore" should be tracked by Make with parameters values:
    | name                | value                                                               |
    | eventType           | trackCustom                                                         |
    | country             | FR                                                                  |
    | language            | fr                                                                  |
    | location            | sequence                                                            |
    | questionId          | question-0-id                                                       |
    | questionSlug        | question-0-slug                                                     |
    | referrer            | http://localhost:9009/__/                                           |
    | source              | core                                                                |
    | url                 | http://localhost:9009/FR/consultation/question-0-slug/selection  |
    And card "8" is visible
    And card "8" is a proposal card
    And progress gauge is "8" on "15"
    And I don't see "next proposal" button on card "8"
    When I vote "neutral" on the current card
    Then I see "next proposal" button on card "8"
    When I click on "next proposal" of the current card
    Then event "click-sequence-next-card" should be tracked by Make with parameters values:
    | name                | value                                                               |
    | eventType           | trackCustom                                                         |
    | country             | FR                                                                  |
    | language            | fr                                                                  |
    | location            | sequence                                                            |
    | questionId          | question-0-id                                                       |
    | questionSlug        | question-0-slug                                                     |
    | referrer            | http://localhost:9009/__/                                           |
    | source              | core                                                                |
    | url                 | http://localhost:9009/FR/consultation/question-0-slug/selection  |
    And card "9" is visible
    And card "9" is a proposal card
    And progress gauge is "9" on "15"
    And I don't see "next proposal" button on card "9"
    When I vote "neutral" on the current card
    Then I see "next proposal" button on card "9"
    When I click on "next proposal" of the current card
    Then event "click-sequence-next-card" should be tracked by Make with parameters values:
    | name                | value                                                               |
    | eventType           | trackCustom                                                         |
    | country             | FR                                                                  |
    | language            | fr                                                                  |
    | location            | sequence                                                            |
    | questionId          | question-0-id                                                       |
    | questionSlug        | question-0-slug                                                     |
    | referrer            | http://localhost:9009/__/                                           |
    | source              | core                                                                |
    | url                 | http://localhost:9009/FR/consultation/question-0-slug/selection  |
    And card "10" is visible
    And card "10" is a proposal card
    And progress gauge is "10" on "15"
    And I don't see "next proposal" button on card "10"
    When I vote "neutral" on the current card
    Then I see "next proposal" button on card "10"
    When I click on "next proposal" of the current card
    Then event "click-sequence-next-card" should be tracked by Make with parameters values:
    | name                | value                                                               |
    | eventType           | trackCustom                                                         |
    | country             | FR                                                                  |
    | language            | fr                                                                  |
    | location            | sequence                                                            |
    | questionId          | question-0-id                                                       |
    | questionSlug        | question-0-slug                                                     |
    | referrer            | http://localhost:9009/__/                                           |
    | url                 | http://localhost:9009/FR/consultation/question-0-slug/selection  |
    And card "11" is visible
    And card "11" is a proposal card
    And progress gauge is "11" on "15"
    And I don't see "next proposal" button on card "11"
    When I vote "neutral" on the current card
    Then I see "next proposal" button on card "11"
    When I click on "next proposal" of the current card
    Then event "click-sequence-next-card" should be tracked by Make with parameters values:
    | name                | value                                                               |
    | eventType           | trackCustom                                                         |
    | country             | FR                                                                  |
    | language            | fr                                                                  |
    | location            | sequence                                                            |
    | questionId          | question-0-id                                                       |
    | questionSlug        | question-0-slug                                                     |
    | referrer            | http://localhost:9009/__/                                           |
    | url                 | http://localhost:9009/FR/consultation/question-0-slug/selection  |
    And card "12" is visible
    And card "12" is a proposal card
    And progress gauge is "12" on "15"
    And I don't see "next proposal" button on card "12"
    When I vote "agree" on the current card
    And I qualify "likeIt" on the current card
    Then I see "next proposal" button on card "12"
    When I click on "next proposal" of the current card
    Then event "click-sequence-next-card" should be tracked by Make with parameters values:
    | name                | value                                                               |
    | eventType           | trackCustom                                                         |
    | country             | FR                                                                  |
    | language            | fr                                                                  |
    | location            | sequence                                                            |
    | questionId          | question-0-id                                                       |
    | questionSlug        | question-0-slug                                                     |
    | referrer            | http://localhost:9009/__/                                           |
    | url                 | http://localhost:9009/FR/consultation/question-0-slug/selection  |
    And card "13" is visible
    And card "13" is a proposal card
    And progress gauge is "13" on "15"
    And I don't see "next proposal" button on card "13"
    When I vote "neutral" on the current card
    Then I see "next proposal" button on card "13"
    When I click on "next proposal" of the current card
    Then event "click-sequence-next-card" should be tracked by Make with parameters values:
    | name                | value                                                               |
    | eventType           | trackCustom                                                         |
    | country             | FR                                                                  |
    | language            | fr                                                                  |
    | location            | sequence                                                            |
    | questionId          | question-0-id                                                       |
    | questionSlug        | question-0-slug                                                     |
    | referrer            | http://localhost:9009/__/                                           |
    | url                 | http://localhost:9009/FR/consultation/question-0-slug/selection  |
    And card "14" is visible
    And card "14" is a signup card
    And progress gauge is "14" on "15"
    When I click on "skip sign up" of the current card
    Then event "skip-sign-up-card" should be tracked by Make with parameters values:
    | name                | value                                                               |
    | eventType           | trackCustom                                                         |
    | country             | FR                                                                  |
    | language            | fr                                                                  |
    | location            | sequence                                                            |
    | questionId          | question-0-id                                                       |
    | questionSlug        | question-0-slug                                                     |
    | referrer            | http://localhost:9009/__/                                           |
    | url                 | http://localhost:9009/FR/consultation/question-0-slug/selection  |
    And card "15" is visible
    And card "15" is a final card
    And progress gauge is "15" on "15"
    When I click on "previous card" of the current card
    Then event "click-sequence-previous-card" should be tracked by Make with parameters values:
    | name                | value                                                               |
    | eventType           | trackCustom                                                         |
    | country             | FR                                                                  |
    | language            | fr                                                                  |
    | location            | sequence                                                            |
    | questionId          | question-0-id                                                       |
    | questionSlug        | question-0-slug                                                     |
    | referrer            | http://localhost:9009/__/                                           |
    | url                 | http://localhost:9009/FR/consultation/question-0-slug/selection  |
    And card "14" is visible
    When I click on "previous card" of the current card
    Then event "click-sequence-previous-card" should be tracked by Make with parameters values:
    | name                | value                                                               |
    | eventType           | trackCustom                                                         |
    | country             | FR                                                                  |
    | language            | fr                                                                  |
    | location            | sequence                                                            |
    | questionId          | question-0-id                                                       |
    | questionSlug        | question-0-slug                                                     |
    | referrer            | http://localhost:9009/__/                                           |
    | url                 | http://localhost:9009/FR/consultation/question-0-slug/selection  |
    And card "13" is visible
    When I click on "previous card" of the current card
    Then event "click-sequence-previous-card" should be tracked by Make with parameters values:
    | name                | value                                                               |
    | eventType           | trackCustom                                                         |
    | country             | FR                                                                  |
    | language            | fr                                                                  |
    | location            | sequence                                                            |
    | questionId          | question-0-id                                                       |
    | questionSlug        | question-0-slug                                                     |
    | referrer            | http://localhost:9009/__/                                           |
    | url                 | http://localhost:9009/FR/consultation/question-0-slug/selection  |
    And card "12" is visible
    And I see "agree" voted proposal on the current card
    And I see "likeIt" qualified proposal on the current card