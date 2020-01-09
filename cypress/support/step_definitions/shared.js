// pages list
export const pages = {
  'homepage': '/',
  'france homepage': '/FR-fr',
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

// others
then('The mouse is focused in {string} field', (field) => {
  cy.focused().should('have.attr', 'id').and('eq', field);
});
