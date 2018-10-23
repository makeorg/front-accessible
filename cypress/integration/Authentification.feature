Feature: The Authentification
  I want to authentificate to the service

  Scenario: show sign form when I propose from home page
    Given I open home page
    When I submit a proposal Il faut "que j'ai 10 cacratezerere"
    Then I see the proposal authentification

  Scenario: Register without all required field
    Given I'am on proposal sign up form
    When I register with email "foo@yopmail.com" and password "passpass"
    Then The mouse is focused in "firstname" field

  Scenario: Register with wrong password
    Given I'am on proposal sign up form
    When I register with email "baz@yopmail.com" and password "pass" and firstname "foo"
    Then I see "Votre mot de passe doit contenir au moins 8 caractères." message as "password" error

  Scenario: Register with a new user
    Given I'am on proposal sign up form
    When I register with email "unique@yopmail.com" and password "passpass" and firstname "foo"
    Then Sign up form is closed

  Scenario: Register with an existant user
    Given I'am on proposal sign up form
    When I register with email "foo@yopmail.com" and password "passpass" and firstname "foobar"
    Then I see "Cet email est dèja inscrit." message as "email" error

  Scenario: Login with a new user from proposal sign in
    Given I'am on proposal sign in form
    When I login with email "unique@yopmail.com" and password "passpass"
    Then I see "Nous ne trouvons pas de compte associé à cet email." as message error

  Scenario: Login with an existant user
    Given I'am on proposal sign in form
    When I login with email "foo@yopmail.com" and password "passpass"
    Then I see the proposal success
