##### ProfileProposalCard Example :
```jsx
import { proposalTypeFixture } from '../../../../shared/types/__fixtures__/proposal.fixture.js';
import { ProfileProposalCard } from './index';

<ul style={{listStyle: 'none', padding: '15px', background: '#f2f2f2'}}>
  <ProfileProposalCard 
    proposal={proposalTypeFixture}
    withStatus
  />
</ul>
```