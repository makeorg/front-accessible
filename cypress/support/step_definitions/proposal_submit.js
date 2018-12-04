when('I begin typing a proposal', () => {
  cy.get('#proposal').focus();
});

then('I dont see proposal submit description', () => {
  cy.get('#proposal-submit-description').should('not.exist');
});

then('I see proposal submit description', () => {
  cy.get('#proposal-submit-description').should('exist');
  cy.get('#proposal-submit-description').contains('Ne vous inquiétez pas, nous corrigerons vos éventuelles fautes d\'orthographe.');
});

then('The submit button is {string}', (state) => {
  cy.get('#proposal-submit-button').should(state);
})

when('I type a proposal Il faut {string}', (content) => {
  cy.get('#proposal').type(content);
});

when('I submit a proposal Il faut {string}', (content) => {
  cy.get('#proposal').type(content);
  cy.get('#proposal-submit-button').click();
});

when('I submit proposal', () => {
  cy.get('#proposal-submit-button').click();
});
