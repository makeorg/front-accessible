const voteLabel = {
  "D'accord": "agree",
  "Pas d'accord": "disagree",
  "Neutre": "neutral"
};

when('I click into start sequence', () => {
  cy.get('#sequence-start-sequence-button').click();
});

when('I see proposal {string}', (proposalNumber) => {
  cy.get(`#proposal-card-${proposalNumber}`).should('be.visible');
});

when('I vote {string} on proposal {string}', (voteType, proposalNumber) => {
  cy.get(`#${voteLabel[voteType]}-${proposalNumber}`).click();
});

when('I vote {string} on the first proposal of sequence', (voteType) => {  
  cy.get('#sequence-start-sequence-button').click();
  cy.get('#card-1 button.agree').first().click();
});
  
when('I vote on all cards of the sequence with {string}', (voteType) => {
  cy.wrap(Array.from(new Array(12), (val, index) => index + 1)).each((i) => {
    cy.get(`#proposal-card-${i}`).should('be.visible');
    cy.get(`#${voteLabel[voteType]}-${i}`).click();
    cy.get(`#next-button-${i}`).click();
  });
});

when('I qualify {string} on proposal {string}', (qualificationType, proposalNumber) => {
  cy.get(`#proposal-card-${proposalNumber}`).contains(qualificationType).click();
});

when('I pass to the next card from proposal {string}', (proposalNumber) => {
  cy.get(`#next-button-${proposalNumber}`).click();
});

then('I Cannot pass to the next card', () => {
  cy.contains('Proposition suivante').should('not.be.visible')
});

then('Qualification count of {string} in first proposal should be greatter than 0', (qualificationType) => {
  cy.get('#proposal-card-1').contains(qualificationType).children('span').contains(/^[1-9](\d)*/);
});

when('I see final card', () => {
  cy.contains('Merci de votre participation').parent().should('be.visible');
});

then('The button see all proposals should redirected to consultation page', () => {
  cy.contains('Voir toutes les propositions').should('have.prop', 'href').and('contains', '/FR#/FR/consultation/aines/consultation');
});


then(`I see a sequence with {string} cards`, (number) => {
  cy.get('#sequence').children().should('have.length', number);
})
