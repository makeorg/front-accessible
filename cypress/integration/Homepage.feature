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

  Scenario: Homepage has featured questions
    Given I go to "france homepage"
    Then I see "Grandes causes Make.org" in "featured_questions_subtitle" container
    And I see "Make.org passe à l’action sur les grands sujets de société" in "featured_questions_title" container
    And I see a link "operationTitle_5" to "/FR-fr/consultation/question-5-slug/consultation" in "featured_questions_navigation" container

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
      | url                 | http://localhost:9009/beta/FR-fr/home                               |
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