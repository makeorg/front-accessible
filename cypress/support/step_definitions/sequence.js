const voteLabel = {
  "D'accord": "agree",
  "Pas d'accord": "disagree",
  "Neutre": "neutral"
};

import { getIdentifierButtonByName } from '../mapping';

const waitCardTransition = () => {};
const waitVoteTransition = () => cy.wait(500);
const waitQualificationTransition = () => cy.wait(500);

const getCurrentCard = () => {
  return cy.get('[data-cy-container=sequence]')
    .then(el => {
      return cy.document()
        .then((doc) => {
          const rectSequence = el.get(0).getBoundingClientRect();
          const x = rectSequence.x+(rectSequence.width/2);
          const y = rectSequence.y+(rectSequence.height/2);
          const visibleElement = doc.elementFromPoint(x, y).closest("[data-cy-card-type]");

          return visibleElement;
        })
      ;
    })
  ;
};

when ('I click on {string} of the sequence', (buttonName) => {
  const button = getIdentifierButtonByName(buttonName);
  cy.get(`[data-cy-button=${button}]`)
    .first()
    .then(el => el.get(0).click());
  waitCardTransition();
})

when ('I click on {string} of the current card', buttonName => {
  const button = getIdentifierButtonByName(buttonName);
  getCurrentCard()
    .find(`[data-cy-button=${button}]`)
    .then(el => el.get(0).click());
  waitCardTransition();
})

when('I vote {string} on proposal {string}', (voteType, proposalNumber) => {
  cy.get(`#${voteLabel[voteType]}-${proposalNumber}`)
    .then(el => el.get(0).click());
});

when('I vote {string} on the first proposal of sequence', (voteType) => {
  cy.get(`[data-cy-card-type=PROPOSAL_CARD] [data-cy-button=vote][data-cy-vote-key=${voteType}]`)
    .first()
    .then(el => el.get(0).click());
  waitVoteTransition();
});

when('I vote {string} on the current card', (voteType) => {
  getCurrentCard()
    .find(`[data-cy-button=vote][data-cy-vote-key=${voteType}]`)
    .first()
    .then(el => el.get(0).click());
  waitVoteTransition();
});

when('I unqualify/qualify {string} on the current card', (qualificationType) => {
  getCurrentCard()
    .find(`[data-cy-button=qualification][data-cy-qualification-key=${qualificationType}]`)
    .first()
    .then(el => el.get(0).click());
  waitQualificationTransition();
});

when('I unvote on the current card', () => {
  getCurrentCard()
    .find(`[data-cy-button=vote]`)
    .first()
    .then(el => el.get(0).click());
  waitVoteTransition();
});

then ('I see {string} button on card {string}', (buttonName, cardNumber) => {
  const button = getIdentifierButtonByName(buttonName);
  cy.get(`[data-cy-card-number=${cardNumber}] [data-cy-button=${button}]`)
    .should('be.visible');
});

then ('I don\'t see {string} button on card {string}', (buttonName, cardNumber) => {
  const button = getIdentifierButtonByName(buttonName);
  cy.get(`[data-cy-card-number=${cardNumber}] [data-cy-button=${button}]`)
    .should('not.visible');
});

when ('I go to card {string}', (cardNumber) => {
  let previewCard = 0;
  const nextWhileCardTargetNotDisplayed = () => {
    const currentCard = getCurrentCard();
    currentCard
      .then(card => {
        card
        .find('[data-cy-button=vote]')
        .first()
        .click()
      });

    currentCard
      .find('[data-cy-button=next-proposal], [data-cy-button=push-proposal-next], [data-cy-button=skip-sign-up], [data-cy-button=start-sequence]')
      .first()
      .then(el => el.get(0).click());
    waitCardTransition();
    const expectedCardNumber = (Number(previewCard)+1).toString();
    cy.waitUntil(() => getCurrentCard().then(currentCard => 
        currentCard.get(0).dataset.cyCardNumber === expectedCardNumber
    ));
    previewCard = expectedCardNumber;
    if (expectedCardNumber != cardNumber) {
      nextWhileCardTargetNotDisplayed();
    }
  };
  nextWhileCardTargetNotDisplayed();
});

then('card {string} is visible', (cardNumber) => {
  cy.waitUntil(() =>
    getCurrentCard().then(currentCard => 
      currentCard.get(0).dataset.cyCardNumber === cardNumber
    )
  );
});

then('card {string} is a proposal card', (cardNumber) => {
  cy.get(`[data-cy-card-number=${cardNumber}]`)
    .should('have.attr', 'data-cy-card-type', 'PROPOSAL_CARD');
});

then('card {string} is a final card', (cardNumber) => {
  cy.get(`[data-cy-card-number=${cardNumber}]`)
    .should('have.attr', 'data-cy-card-type', 'EXTRASLIDE_FINAL_CARD');
});

then('card {string} is an intro card', (cardNumber) => {
  cy.get(`[data-cy-card-number=${cardNumber}]`)
    .should('have.attr', 'data-cy-card-type', 'EXTRASLIDE_INTRO_CARD');
});

then('card {string} is a push proposal card', (cardNumber) => {
  cy.get(`[data-cy-card-number=${cardNumber}]`)
    .should('have.attr', 'data-cy-card-type', 'EXTRASLIDE_PUSH_PROPOSAL_CARD');
});

then('card {string} is a signup card', (cardNumber) => {
  cy.get(`[data-cy-card-number=${cardNumber}]`)
    .should('have.attr', 'data-cy-card-type', 'EXTRASLIDE_PUSH_SIGNUP_CARD');
});

then('progress gauge is {string} on {string}', (current, total) => {
  getCurrentCard()
    .find('[data-cy-container=progress]')
    .contains(`${current}/${total}`);
  getCurrentCard()
    .find('[data-cy-element=progress-a11y]')
    .should('have.attr', 'value', current)
    .should('have.attr', 'max', total)
    .should('have.attr', 'aria-valuenow', current)
    .should('have.attr', 'aria-valuemax', total)
    .contains(`Carte numéro ${current} sur ${total}`);
});

then('progress gauge is not visible', () => {
  getCurrentCard()
      .find('[data-cy-container=progress]')
      .should('not.exist')
      .and('not.visible')
});

then('I see {string} in the current card', (text) => {
  getCurrentCard()
    .should('contain', text);
});

then ('I see signup buttons in the current card', () => {
  getCurrentCard()
    .find('[data-cy-container=signup-auth-buttons] button:nth-child(1)')
    .should('contain', 'Facebook');
  getCurrentCard()
    .find('[data-cy-container=signup-auth-buttons] button:nth-child(2)')
    .should('contain', 'Google');
  getCurrentCard()
    .find('[data-cy-container=signup-auth-buttons] button:nth-child(3)')
    .should('contain', 'Email');
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
  getCurrentCard()
    .find(`[data-cy-button=vote][data-cy-vote-key=agree]`)
    .should('have.length', 1)
    .and('be.visible');
  getCurrentCard()
    .find(`[data-cy-button=vote][data-cy-vote-key=disagree]`)
    .should('have.length', 1)
    .and('be.visible');
  getCurrentCard()
    .find(`[data-cy-button=vote][data-cy-vote-key=neutral]`)
    .should('have.length', 1)
    .and('be.visible');
});

then ('I see {string} voted proposal on the current card', (voteType) => {
  getCurrentCard()
  .find(`[data-cy-button=vote][data-cy-vote-key=${voteType}] svg`)
  .should('have.length', 1)
  .and('be.visible')
  .and('have.class', 'voted')
});

then('I see {string} qualified proposal on the current card', (qualificationType) => {
  getCurrentCard()
  .find(`[data-cy-button=qualification][data-cy-qualification-key=likeIt]`)
  .should('have.length', 1)
  .and('be.visible')
  .and('have.class', 'qualified')
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
  getCurrentCard()
    .find('[data-cy-qualification-key]')
    .should('have.length', 0);
});

then('{string} qualification button is highlight on the current card', (qualificationType) => {
  getCurrentCard()
    .find(`[data-cy-button=qualification][data-cy-qualification-key=${qualificationType}]`)
    .first()
    .should('have.css', 'background-color', 'rgb(80, 122, 31)');
});

then('{string} qualification button is not highlight on the current card', (qualificationType) => {
  getCurrentCard()
    .find(`[data-cy-button=qualification][data-cy-qualification-key=${qualificationType}]`)
    .first()
    .should('have.not.css', 'background-color', 'rgb(80, 122, 31)');
});

then('total votes are equal to {string}', (voteCount) => {
  cy.get('[data-cy-container=sequence]')
    .should('contain', `${voteCount} votes`);
});

then('total {string} qualifications are equal to {string} on the current card',(qualificationType, total) => {
  getCurrentCard()
    .find(`[data-cy-button=qualification][data-cy-qualification-key=${qualificationType}]`)
    .first()
    .contains(total);
});

then('I don\'t see the propose note section', () => {
  cy.get('[data-cy-container=proposal_submit]')
    .first()
    .then( el => {
      expect(el[0].offsetHeight).to.be.lessThan(60);
    });
});

then('I see the propose note section', () => {
  cy.get('[data-cy-container=proposal_submit]')
    .first()
    .then( el => {
      expect(el[0].offsetHeight).to.be.greaterThan(100);
    });
});