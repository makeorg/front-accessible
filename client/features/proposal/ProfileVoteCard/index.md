##### ProfileVoteCard Example :
```jsx
import { proposalTypeFixture } from '../../../../shared/types/__fixtures__/proposal.fixture.js';
import { organisationTypeFixture } from '../../../../shared/types/__fixtures__/organisation.fixture.js';
import { ProfileVoteCard } from './index';

<ul style={{listStyle: 'none', padding: '15px', background: '#f2f2f2'}}>
  <ProfileVoteCard 
    voteKey='agree'
    proposal={proposalTypeFixture}
    organisation={organisationTypeFixture}
  />
</ul>
```