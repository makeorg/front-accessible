Feature: The header
  I want to check header component

  Scenario: Header is present in all pages
    Given I go to "homepage"
    Then I see "header" container
    When I go to "sequence" page of the question "question-3-slug"
    Then I see "header" container
    When I go to "data policy"
    Then I see "header" container
    When I go to "browse consultations"
    Then I see "header" container
    When I go to "browse results"
    Then I see "header" container
    When I go to "top idea" page of the question "question-1-slug"
    Then I see "header" container
    When I go to 404 FR page
    Then I see "header" container
    When I go to 404 page
    Then I see "header" container
  
  Scenario: Header is complete
    Given I am on "homepage"
    And I see Make logo
    And I see a button "mobile search" in "header" container
    And I see a button "login" in "header" container

  Scenario: Make logo link
    Given I am on "browse consultations"
    When I click on "home" link
    Then I see the "france homepage" page

  Scenario: Search from header
    Given I am on "homepage"
    And I see "header" container
    And the search input in header is not visible
    When I click on "mobile search" button
    Then the search input in header is visible
    # @toDo
    # And the search input in header has focus
    And the search input in header has a "Rechercher" label
    And I see a button "mobile search cancel" in "header" container
    And I see a button "search submit" in "header" container
    And I don't see "mobile search" button
    When I click on "mobile search cancel" button
    Then the search input in header is not visible
    And I see Make logo
    And I see "login" button
    And I see "mobile search" button
    And I don't see "mobile search cancel" button
    And I don't see "search submit" button
    When I click on "mobile search" button
    Then the "search submit" button is disabled
    When I type "t" in field "search"
    Then the "search submit" button is disabled
    When I type "e" in field "search"
    Then the "search submit" button is disabled
    When I type "s" in field "search"
    Then the "search submit" button is enabled
    When I click on "search submit" button
    Then I see the "search" page with "query=tes" as query params
    And the search input in header is visible
    And The field "search" should have value "tes"
    And I don't see "search submit" button
    And I see "mobile search cancel" button
    And I see a "search clear" button
    When I click on "search clear" button
    Then The field "search" should be empty

  Scenario: Display authentication form
    Given I am on "homepage"
    When I click on "login" button
    Then I see "authentication" container 