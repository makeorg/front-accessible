Feature: The Home Page
  I want to vist the Make.org home page
  Background: 
    Given monitor api requests
  Scenario: Redirect to france Homepage
    Given I go to "homepage"
    Then I should be redirect to "france deprecated homepage"
  
  Scenario: Homepage has a title
    Given I go to "france homepage"
    Then I see "Agir avec Make.org - Make.org" in the title

  Scenario: Track display home page
    Given I monitor API "postTracking" requests
    When I go to "france homepage"
    Then event "display-page-home" should be tracked by Make with parameters values:
      | name                | value                                                               |
      | eventType           | trackCustom                                                         |
      | country             | FR                                                                  |
      | language            | fr                                                                  |
      | source              | core                                                                |
      | location            | homepage                                                            |
      | questionId          |                                                                     |
      | questionSlug        |                                                                     |
      | referrer            | http://localhost:9009/__/                                           |
      | url                 | http://localhost:9009/FR-fr/beta/home                               |
    And some make data header should be sent to "postTracking":
      | name          | value                                       |
      | app-name      | main-front                                  |
      | source        | core                                        |
      | location      | homepage                                    |
      | language      | fr                                          |
      | country       | FR                                          |
      | question-id   |                                             |
      | referrer      | http://localhost:9009/__/                   |
      | custom-data   |                                             |