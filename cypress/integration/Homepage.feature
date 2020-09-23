Feature: The Home Page
  I want to vist the Make.org home page
  Background: 
    Given monitor api requests
  Scenario: Redirect to france Homepage
    Given I go to "homepage"
    Then I should be redirect to "france homepage"
  
  Scenario: Homepage has a title
    Given I go to "france homepage"
    Then I see "Agir avec Make.org - Make.org" in the title

    Scenario: Homepage has canonical url
      Given I go to "france homepage"
      Then I see the canonical url "https://make.org/FR-fr" of the page 

  Scenario: Homepage has hero section
    Given I go to "france homepage"
    Then I see "Ensemble, nous avons le pouvoir d'améliorer la société" in "hero-title" container

  Scenario: Homepage has highlights section
    Given I go to "france homepage"
    Then I see "Make.org en quelques chiffres" in "highlights_title" container

  Scenario: Homepage has currentQuestion section
    Given I go to "france homepage"
    Then I see "Participez aux consultations en cours" in "current_consultations_title" container

  Scenario: Homepage has featuredQuestions section
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
      | url                 | http://localhost:9009/FR-fr                                         |
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

