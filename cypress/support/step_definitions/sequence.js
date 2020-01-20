const voteLabel = {
  "D'accord": "agree",
  "Pas d'accord": "disagree",
  "Neutre": "neutral"
};
const sequenceButtons = {
  "intro card start button": 'start-sequence',
  "next proposal": 'next-proposal',
}
const waitCardTransition = () => cy.wait(1000);
const waitVoteTransition = () => cy.wait(500);
const waitQualificationTransition = () => cy.wait(500);

const getCurrentCard = () => {
  return cy.get('[data-cy-container=sequence]')
    .then(el => {
      return cy.document()
        .then((doc) => {
          const rectSequence = el.get(0).getBoundingClientRect();
          const visibleElement = doc.elementFromPoint(
            rectSequence.x+(rectSequence.width/2),
            rectSequence.y+(rectSequence.height/2)
          ).closest("[data-cy-card-type]");

          return visibleElement;
        })
      ;
    })
  ;
};

when ('I click on {string} of the sequence', (buttonName) => {
  const button = sequenceButtons[buttonName] ? sequenceButtons[buttonName] : buttonName;
  cy.get(`[data-cy-button=${button}]`).first().click();
  waitCardTransition();
})

when('I vote {string} on proposal {string}', (voteType, proposalNumber) => {
  cy.get(`#${voteLabel[voteType]}-${proposalNumber}`).click();
});

when('I vote {string} on the first proposal of sequence', (voteType) => {
  cy.get(`[data-cy-card-type=PROPOSAL_CARD] [data-cy-button=vote][data-cy-vote-key=${voteType}]`)
    .first()
    .click();
  waitVoteTransition();
});

when('I vote {string} on the current card', (voteType) => {
  getCurrentCard().find(`[data-cy-button=vote][data-cy-vote-key=${voteType}]`)
    .first()
    .click()
  waitVoteTransition();
});

when('I unqualify/qualify {string} on the current card', (qualificationType) => {
  getCurrentCard().find(`[data-cy-button=qualification][data-cy-qualification-key=${qualificationType}]`)
    .first()
    .click();
  waitQualificationTransition();
});

when('I unvote on the current card', () => {
  getCurrentCard().find(`[data-cy-button=vote]`)
  .first()
  .click()
  waitVoteTransition();
});

then ('I see {string} button on card {string}', (buttonName, cardNumber) => {
  cy.get(`[data-cy-card-number=${cardNumber}] [data-cy-button=${sequenceButtons[buttonName]}]`)
    .should('be.visible');
})

then('card {string} is visible', (cardNumber) => {
  getCurrentCard().then((currentCard) => {
    expect(currentCard.get(0).dataset.cyCardNumber).to.be.equal(cardNumber);
  });
});

then('card {string} is a proposal card', (cardNumber) => {
  cy.get(`[data-cy-card-number=${cardNumber}]`).should('have.attr', 'data-cy-card-type', 'PROPOSAL_CARD');
});

then('progress gauge is {string} on {string}', (current, total) => {
  cy.get('[data-cy-container=progress]').contains(`${current}/${total}`);
  cy.get('[data-cy-element=progress-a11y]')
    .should('have.attr', 'value', current)
    .should('have.attr', 'max', total)
    .should('have.attr', 'aria-valuenow', current)
    .should('have.attr', 'aria-valuemax', total)
    .contains(`Carte numéro ${current} sur ${total}`)
});

then('I see vote buttons on card {string}', (cardNumber) => {
  cy.get(`[data-cy-card-number=${cardNumber}] [data-cy-button=vote][data-cy-vote-key=agree]`)
    .should('have.length', 1)
    .and('be.visible');
  cy.get(`[data-cy-card-number=${cardNumber}] [data-cy-button=vote][data-cy-vote-key=disagree]`)
    .should('have.length', 1)
    .and('be.visible');
  cy.get(`[data-cy-card-number=${cardNumber}] [data-cy-button=vote][data-cy-vote-key=neutral]`)
    .should('have.length', 1)
    .and('be.visible');
});

then('I see vote buttons on the current card', () => {
  getCurrentCard().find(`[data-cy-button=vote][data-cy-vote-key=agree]`)
    .should('have.length', 1)
    .and('be.visible');
    getCurrentCard().find(`[data-cy-button=vote][data-cy-vote-key=disagree]`)
    .should('have.length', 1)
    .and('be.visible');
    getCurrentCard().find(`[data-cy-button=vote][data-cy-vote-key=neutral]`)
    .should('have.length', 1)
    .and('be.visible');
});

then('I see agree qualifications buttons on card {string}', (cardNumber) => {
  cy.get(`[data-cy-card-number=${cardNumber}] [data-cy-button=qualification]`)
    .should('have.length', 3);

  cy.get(`[data-cy-card-number=${cardNumber}] [data-cy-qualification-key=likeIt]`)
    .should('be.visible');
  cy.get(`[data-cy-card-number=${cardNumber}] [data-cy-qualification-key=doable]`)
    .should('be.visible');
  cy.get(`[data-cy-card-number=${cardNumber}] [data-cy-qualification-key=platitudeAgree]`)
    .should('be.visible');
});

then('I see disagree qualifications buttons on card {string}', (cardNumber) => {
  cy.get(`[data-cy-card-number=${cardNumber}] [data-cy-button=qualification]`)
    .should('have.length', 3);

  cy.get(`[data-cy-card-number=${cardNumber}] [data-cy-qualification-key=noWay]`)
    .should('be.visible');
  cy.get(`[data-cy-card-number=${cardNumber}] [data-cy-qualification-key=impossible]`)
    .should('be.visible');
  cy.get(`[data-cy-card-number=${cardNumber}] [data-cy-qualification-key=platitudeDisagree]`)
    .should('be.visible');
});

then('I see neutral qualifications buttons on card {string}', (cardNumber) => {
  cy.get(`[data-cy-card-number=${cardNumber}] [data-cy-button=qualification]`)
    .should('have.length', 3);

  cy.get(`[data-cy-card-number=${cardNumber}] [data-cy-qualification-key=doNotUnderstand]`)
    .should('be.visible');
  cy.get(`[data-cy-card-number=${cardNumber}] [data-cy-qualification-key=noOpinion]`)
    .should('be.visible');
  cy.get(`[data-cy-card-number=${cardNumber}] [data-cy-qualification-key=doNotCare]`)
    .should('be.visible');
});

then('I don\'t see qualification buttons on the current card', () => {
  getCurrentCard().find('[data-cy-qualification-key]')
    .should('have.length', 0);
});

then('{string} qualification button is highlight on the current card', (qualificationType) => {
  getCurrentCard().find(`[data-cy-button=qualification][data-cy-qualification-key=${qualificationType}]`)
    .first()
    .should('have.css', 'background-color', 'rgb(80, 122, 31)');
});

then('{string} qualification button is not highlight on the current card', (qualificationType) => {
  getCurrentCard().find(`[data-cy-button=qualification][data-cy-qualification-key=${qualificationType}]`)
    .first()
    .should('have.not.css', 'background-color', 'rgb(80, 122, 31)');
});

then('total votes are equal to {string}', (voteCount) => {
  cy.get('[data-cy-container=sequence]').should('contain', `${voteCount} votes`)
});

then('total {string} qualifications are equal to {string} on the current card',(qualificationType, total) => {
  getCurrentCard().find(`[data-cy-button=qualification][data-cy-qualification-key=${qualificationType}]`)
    .first()
    .contains(total);
});

then('I don\'t see the propose note section', () => {
  cy.get('[data-cy-container=proposal_submit]').first().then( el => {
    expect(el[0].offsetHeight).to.be.lessThan(60);
  });
});

then('I see the propose note section', () => {
  cy.get('[data-cy-container=proposal_submit]').first().then( el => {
    expect(el[0].offsetHeight).to.be.greaterThan(100);
  });
});