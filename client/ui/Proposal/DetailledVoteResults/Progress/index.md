##### VoteProgress Example :
```jsx
import { proposalTypeFixture } from '../../../../../shared/types/__fixtures__/proposal.fixture.js';
import { VoteProgress } from './index';
  <VoteProgress
    votes={proposalTypeFixture.votes}
    proposalId={proposalTypeFixture.id}
  />
```