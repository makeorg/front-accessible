##### DetailledVoteResults Example :
```jsx
import { proposalTypeFixture } from '../../../../shared/types/__fixtures__/proposal.fixture.js';
import { DetailledVoteResults } from './index';
  <DetailledVoteResults
    votes={proposalTypeFixture.votes}
    proposalId={proposalTypeFixture.id}
  />
```