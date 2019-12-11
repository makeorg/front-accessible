Feature: track vote on sequence
  I want to track votes 
  Background: 
    Given monitor api requests
  Scenario: Track vote on first sequence card
    Given I am on "sequence page" of the question "question-0-slug"
    And I monitor API "postVote" requests
    And I monitor API "postTracking" requests
    When I vote "agree" on the first proposal of sequence
    Then some make data header should be sent to "postVote":  
    | name          | value                                       |
    | app-name      | main-front                                  |
    | source        | core                                        |
    | location      | sequence question-0-id                      |
    | language      | fr                                          |
    | country       | FR                                          |
    | question-id   | question-0-id                               |
    | referrer      | http://localhost:9009/__/                   |
    | custom-data   |                                             |
    And some make data header should be sent to "postTracking":
    | name          | value                                       |
    | app-name      | main-front                                  |
    | source        | core                                        |
    | location      | sequence question-0-id                      |
    | language      | fr                                          |
    | country       | FR                                          |
    | question-id   | question-0-id                               |
    | referrer      | http://localhost:9009/__/                   |
    | custom-data   |                                             |
    And event "click-sequence-first-vote" should be tracked by Make with parameters values:
    | name                | value                                                               |
    | eventType           | trackCustom                                                         |
    | card-position       | 1                                                                   |
    | country             | FR                                                                  |
    | language            | fr                                                                  |
    | location            | sequence                                                            |
    | nature              | agree                                                               |
    | proposalId          | proposal-question-0-slug-0-id                                       |
    | questionId          | question-0-id                                                       |
    | questionSlug        | question-0-slug                                                     |
    | referrer            | http://localhost:9009/__/                                           |
    | url                 | http://localhost:9009/FR-fr/consultation/question-0-slug/selection  |
    And event "click-proposal-vote" should be tracked by Make with parameters values:
    | name                | value                                                               |
    | eventType           | trackCustom                                                         |
    | card-position       | 1                                                                   |
    | country             | FR                                                                  |
    | language            | fr                                                                  |
    | location            | sequence                                                            |
    | nature              | agree                                                               |
    | proposalId          | proposal-question-0-slug-0-id                                       |
    | questionId          | question-0-id                                                       |
    | questionSlug        | question-0-slug                                                     |
    | referrer            | http://localhost:9009/__/                                           |
    | url                 | http://localhost:9009/FR-fr/consultation/question-0-slug/selection  |
