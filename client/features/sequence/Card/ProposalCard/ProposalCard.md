##### ProposalCard Example :
```js
const { proposalTypeFixture } = require('../../../../../shared/types/__fixtures__/question.fixture.js');

  <div style={{position: 'relative'}}>
    <ProposalCard proposal={proposalTypeFixture}
      index={4}
      currentIndex={4}
      cardOffset={0}
      cardsCount={15} />
  </div>
```