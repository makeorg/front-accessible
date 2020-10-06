Feature: Browse page
  I want to check the browse page behaviour

  Scenario: Browse consultations page has canonical url
  Given I go to "browse consultations"
  Then I see the canonical url "https://make.org/FR/browse/consultations/page/1" of the page 

  Scenario: Track display browse consultations page
      Given I monitor API "postTracking" requests
      When I go to "browse consultations"
      Then event "display-browse-consultations" should be tracked by Make with parameters values:
        | name                | value                                                               |
        | eventType           | trackCustom                                                         |
        | country             | FR                                                                  |
        | language            | fr                                                                  |
        | source              | core                                                                |
        | location            | browse-consultations-page                                           |
        | questionId          |                                                                     |
        | questionSlug        |                                                                     |
        | referrer            | http://localhost:9009/__/                                           |
        | url                 | http://localhost:9009/FR/browse/consultations/page/1             |

  Scenario: Track click participate on item in browse consultations
      Given I monitor API "postTracking" requests
      When I go to "browse consultations"
      And I click on "item-link-question-0-id" link
      Then event "click-button-participate" should be tracked by Make with parameters values:
        | name                | value                                                                |
        | eventType           | trackCustom                                                          |
        | country             | FR                                                                   |
        | language            | fr                                                                   |
        | source              | core                                                                 |
        | location            | browse-consultations-page                                            |
        | questionId          |                                                                      |
        | questionSlug        |                                                                      |
        | referrer            | http://localhost:9009/__/                                            |
        | url                 | http://localhost:9009/FR/browse/consultations/page/1              |

  Scenario: Browse results page has canonical url
  Given I go to "browse results"
  Then I see the canonical url "https://make.org/FR/browse/results/page/1" of the page 

  Scenario: Track display browse results page
      Given I monitor API "postTracking" requests
      When I go to "browse results"
      Then event "display-browse-results" should be tracked by Make with parameters values:
        | name                | value                                                               |
        | eventType           | trackCustom                                                         |
        | country             | FR                                                                  |
        | language            | fr                                                                  |
        | source              | core                                                                |
        | location            | browse-results-page                                                 |
        | questionId          |                                                                     |
        | questionSlug        |                                                                     |
        | referrer            | http://localhost:9009/__/                                           |
        | url                 | http://localhost:9009/FR/browse/results/page/1                   |

  Scenario: Track click results on item in results consultations
      Given I monitor API "postTracking" requests
      When I go to "browse results"
      And I click on "item-link-question-0-id" link
      Then event "click-button-results" should be tracked by Make with parameters values:
        | name                | value                                                                |
        | eventType           | trackCustom                                                          |
        | country             | FR                                                                   |
        | language            | fr                                                                   |
        | source              | core                                                                 |
        | location            | browse-results-page                                                  |
        | questionId          |                                                                      |
        | questionSlug        |                                                                      |
        | referrer            | http://localhost:9009/__/                                            |
        | url                 | http://localhost:9009/FR/browse/results/page/1                    |

  Scenario: Track click pagination increment in results consultations
      Given I monitor API "postTracking" requests
      When I go to "browse results"
      And I see a button "pagination-next" in "pagination" container
      When I click on "pagination-next" button
      Then event "click-page" should be tracked by Make with parameters values:
        | name                | value                                                                |
        | eventType           | trackCustom                                                          |
        | country             | FR                                                                   |
        | language            | fr                                                                   |
        | source              | core                                                                 |
        | location            | browse-results-page                                                  |
        | questionId          |                                                                      |
        | questionSlug        |                                                                      | 
        | referrer            | http://localhost:9009/__/                                            |
        | url                 | http://localhost:9009/FR/browse/results/page/1                    |
        | page-number         | 1                                                                    |

  Scenario: Track click pagination decrement in results consultations
      Given I monitor API "postTracking" requests
      Then I go to "browse results second page"
      And I see a button "pagination-previous" in "pagination" container
      When I click on "pagination-previous" button
      Then event "click-page" should be tracked by Make with parameters values:
        | name                | value                                                                |
        | eventType           | trackCustom                                                          |
        | country             | FR                                                                   |
        | language            | fr                                                                   |
        | source              | core                                                                 |
        | location            | browse-results-page                                                  |
        | questionId          |                                                                      |
        | questionSlug        |                                                                      | 
        | referrer            | http://localhost:9009/__/                                            |
        | url                 | http://localhost:9009/FR/browse/results/page/2                    |
        | page-number         | 2                                                                    |
