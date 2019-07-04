
export const pages = {
  'homepage': '/',
  'france homepage': '/FR-fr',
};

given('I go to {string}', (targetPage) => {
  if (!pages[targetPage]) {
    throw Error(`You should define "${targetPage}" path`);
  }

  cy.visit(pages[targetPage]);
});

then('The mouse is focused in {string} field', (field) => {
  cy.focused().should('have.attr', 'id').and('eq', field);
});
