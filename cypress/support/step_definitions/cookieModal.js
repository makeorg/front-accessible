import { Then } from "cypress-cucumber-preprocessor/steps";


Then('I have already accepted the cookie policy', () => {
  cy.setCookie('make-cookie', 'true');
});

Then('I accept the cookie policy', () => {
  cy.getCookie('make-cookie').should('have.property', 'value', 'true');
});

Then('I don\'t see cookie modal', () => {
  cy.get('[data-cy-container="cookie-modal"').should('not.exist');
});

Then('I see the cookie modal', () => {
  cy.get('[data-cy-container="cookie-modal"').should('exist');
});
