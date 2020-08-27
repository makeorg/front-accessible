then('I see Make logo', () => {
  cy.get('h1 a svg').should('be.visible') 
});

then('I don\'t see Make logo', () => {
  cy.get('h1 a svg').should('not.be.visible') 
});

then('the search input in header is not visible', ()=> {
  cy.get(`[data-cy-container=header`)
    .find('input')
    .should('not.be.visible')
});

then('the search input in header is visible', () => {
  cy.get(`[data-cy-container=header`)
  .find('input')
  .should('be.visible')
});

then('the search input in header is not visible', () => {
  cy.get(`[data-cy-container=header`)
  .find('input')
  .should('not.be.visible')
});

then('the search input in header has focus', () => {
  cy.get(`[data-cy-container=header`)
  .find('input')
  .should('has.focus')
});


then ('the search input in header has a {string} label', (label) => {
  cy.get(`[data-cy-container=header`)
  .find('form label')
  .contains(label)
})