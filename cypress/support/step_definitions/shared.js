import { getIdentifierButtonByName } from '../mapping';

// pages list
export const pages = {
  'homepage': '/',
  'france deprecated homepage': '/FR-fr',
  'france homepage': '/FR-fr/beta/home',
  'sequence page': '/FR-fr/consultation/:questionSlug/selection'
};

// helpers
const checkPageExist = (page) => {
  if (!pages[page]) {
    throw Error(`You should define "${page}" path`);
  }
};

// navigation
given('I go to {string}', (targetPage) => {
  checkPageExist(targetPage);
  cy.visit(pages[targetPage]);
});

given('I am/go on/to {string} of the question {string}', (targetPage, questionSlug) => {
  checkPageExist(targetPage);
  const page = pages[targetPage].replace(':questionSlug', questionSlug);
  cy.visit(page);
});

given('I am/go on/to {string} of the question {string} with intro card disabled', (targetPage, questionSlug) => {
  checkPageExist(targetPage);
  const page = pages[targetPage].replace(':questionSlug', questionSlug);
  cy.visit(`${page}?introCard=false`);
});

When('I focus {string} field', (fieldName) => {
  cy.get(`[data-cy-field=${fieldName}]`).first().focus();
});

// I see
then('I see {string} in {string} container', (text, containerName) => {
  cy.get(`[data-cy-container=${containerName}]`).first().should('contain', text);
});

then('I see a link {string} to {string} in {string} container', (linkLabel, href, containerName) => {
  cy.get(`[data-cy-container=${containerName}]`)
    .first()
    .contains('a', new RegExp(linkLabel))
    .should('exist')
    .and('have.attr', 'href', href)
    .and('is.visible');
});

then('The link {string} to {string} in {string} container exists', (linkLabel, href, containerName) => {
  cy.get(`[data-cy-container=${containerName}]`)
    .first()
    .contains('a', new RegExp(linkLabel))
    .should('exist')
    .and('have.attr', 'href', href);
});

then('I don\'t see the link {string}', (label) => {
  cy.get('body')
    .contains('a', label)
    .scrollIntoView()
    .should('not.visible');
});

then('I see a button {string} in {string} container', (buttonName, containerName) => {
  cy.get(`[data-cy-container=${containerName}]`)
    .first()
    .find(`button[data-cy-button=${getIdentifierButtonByName(buttonName)}]`)
    .scrollIntoView()
    .should('exist')
    .and('is.visible');
});

then('I see a button {string} with label {string}', (buttonName, containerName, label) => {
  cy.get(`button[data-cy-button=${getIdentifierButtonByName(buttonName)}]`)
    .first()
    .scrollIntoView()
    .contains(new RegExp(label))
    .should('exist')
    .and('is.visible');
});

then('I see a button {string} in {string} container with label {string}', (buttonName, containerName, label) => {
  cy.get(`[data-cy-container=${containerName}]`)
    .first()
    .find(`button[data-cy-button=${getIdentifierButtonByName(buttonName)}]`)
    .scrollIntoView()
    .contains(new RegExp(label))
    .should('exist')
    .and('is.visible');
});

then('I don\'t see {string}', (text) => {
  cy.get('body').contains(text)
    .scrollIntoView()
    .should('exist')
    .and('not.is.visible');
});

then('I see {string}', (text) => {
  cy.get('body').contains(text)
    .scrollIntoView()
    .should('exist')
    .and('is.visible');
});

// forms
then('I type {string} in field {string}', (text, fieldName) => {
  cy.get(`[data-cy-field=${fieldName}]`)
    .first()
    .type(text, {delay: 300, release: false});
});

// disabled
then('the {string} button is disabled', (buttonName) => {
  cy.get(`[data-cy-button=${getIdentifierButtonByName(buttonName)}]`).first().should('have.attr', 'disabled');
});

then('the {string} button is enabled', (buttonName) => {
  cy.get(`[data-cy-button=${getIdentifierButtonByName(buttonName)}]`).first().should('not.have.attr', 'disabled');
});

// others
then('The mouse is focused in {string} field', (field) => {
  cy.focused().should('have.attr', 'id').and('eq', field);
});
