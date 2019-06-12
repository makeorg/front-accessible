##### ProposalCardWithQuestion Example :
```js
import { proposalTypeFixture } from '../../../../shared/types/__fixtures__/proposal.fixture.js';
import { ProposalCardWithQuestion } from './index';

<ul style={{listStyle: 'none', padding: '15px', background: '#f2f2f2'}}>
  <ProposalCardWithQuestion
    proposal={proposalTypeFixture}
  />
</ul>
```