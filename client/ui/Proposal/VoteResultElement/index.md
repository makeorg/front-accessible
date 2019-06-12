##### VoteResultElement Example :
```jsx
import { proposalTypeFixture } from '../../../../shared/types/__fixtures__/proposal.fixture.js';
import { VoteResultElement } from './index';
  <VoteResultElement
    votes={proposalTypeFixture.votes}
    proposalId={proposalTypeFixture.id}
    votedKey='agree'
  />
```