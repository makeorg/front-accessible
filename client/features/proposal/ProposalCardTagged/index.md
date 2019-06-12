##### ProposalCardTagged Example :
```jsx
import { proposalTypeFixture } from '../../../../shared/types/__fixtures__/proposal.fixture.js';
import { questionTypeFixture } from '../../../../shared/types/__fixtures__/sequence.fixture.js';
import { ProposalCardTagged } from './index';

<ul style={{listStyle: 'none', padding: '15px', background: '#f2f2f2'}}>
  <ProposalCardTagged
    proposal={proposalTypeFixture}
  />
</ul>
```