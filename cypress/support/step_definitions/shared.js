export const url = 'http://localhost:3000';

given('I open home page', () => {
  cy.visit(url);
})

then('The mouse is focused in {string} field', (field) => {
  cy.focused().should('have.attr', 'id').and('eq', field);
});
