import { pages } from './shared';

then('I should be redirect to {string}', (targetPage) => {
  if (!pages[targetPage]) {
    throw Error(`You should define "${targetPage}" path`);
  }

  cy.url().should('include', pages[targetPage]);
});
then(`I see {string} in the title`, (title) => {
  cy.get('title').should('have.text', title);
});
then(`I see {string} as the title of the first section`, (title) => {
  cy.get('#featured_title').should('have.text', title);
});
then(`I see {string} as the title of the second section`, (title) => {
  cy.get('#current_consultations_title').should('have.text', title);
});
then('I see the first corporate bloc', () => {
  cy.get('#corporate_title').should('have.text', 'la politique ne suffit plus, faisons bouger les lignes ensemble');
});
then('I see the second corporate bloc', () => {
  cy.get('#who_are_we_title').should('have.text', 'nous découvrir');
});
then('I see a list of consultation', () => {
  cy.get('#business_consultations').find('ul>li').should(($lis) => {
    expect($lis.length).to.be.at.least(3);
  });
});
then(`I see {string} as the title of the {string} section`, (title, sectionName) => {
  cy.get(`#${sectionName}_proposals_title`).contains(title);
});