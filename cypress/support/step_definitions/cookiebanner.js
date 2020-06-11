then('I have already accepted the cookie policy', () => {
  cy.setCookie('make-cookie', 'true');
});

then('I accept the cookie policy', () => {
  cy.getCookie('make-cookie').should('have.property', 'value', 'true');
});

then('I don\'t see cookie banner', () => {
  cy.get('[data-cy-container="cookie-banner"').should('not.exist');
});