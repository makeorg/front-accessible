import { url } from './shared';
import { guid } from '../index';

given('I\'am on proposal sign in form', () => {
  cy.visit(url);
  cy.get('#proposal').type('foo bar');
  cy.get('#proposal-submit-button').click();
  cy.get('#authentification-login-button').click();
});

given('I\'am on proposal sign up form', () => {
  cy.visit(url);
  cy.get('#proposal').type('foo bar');
  cy.get('#proposal-submit-button').click();
  cy.get('#authentification-register-button').click();
});

when('I login with email {string} and password {string}', (email, password) => {
  const emailValue = (email === 'unique@yopmail.com') ? `${guid()}-fake@yopmail.com` : email;
  cy.get('#email').type(emailValue);
  cy.get('#password').type(password);
  cy.get('#authentification-login-submit').click();
});

when('I register with email {string} and password {string}', (email, password) => {
  cy.get('#email').type(email);
  cy.get('#password').type(password);
  cy.get('#authentification-register-submit').click();
});

when('I register with email {string} and password {string} and firstname {string}', (email, password, firstname) => {
  const emailValue = (email === 'unique@yopmail.com') ? `${guid()}-fake@yopmail.com` : email;
  cy.get('#email').type(emailValue);
  cy.get('#password').type(password);
  cy.get('#firstname').type(firstname);
  cy.get('#authentification-register-submit').click();
});

then('I see the login form', () => {
  cy.get('#login_title').should('visible');
});

then('I should not see login form', () => {
  cy.get('#login_title').should('not.visible');
});

then('Sign up form is closed', () => {
  cy.get('#register_title').should('not.visible');
});

then('I see the proposal authentification', () => {
  cy.get('#proposal-submit-authentification').should('exist');
});

then('I see the proposal success', () => {
  cy.get('#proposal-submit-success').should('exist');
});

then('I see {string} message as {string} error', (errorMessage, field) => {
  cy.get(`#authentification-${field}-error`).contains(errorMessage);
});

then('I see {string} as message error', (errorMessage) => {
  cy.get("#authentification-login-error").children().contains(errorMessage);
})