then(`I see {string} in the title`, (title) => {
  cy.get('title').should('have.text', title);
})
