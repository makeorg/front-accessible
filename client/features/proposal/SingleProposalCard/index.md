##### SingleProposalCard Example :
```js
import { proposalTypeFixture } from '../../../../shared/types/__fixtures__/proposal.fixture.js';
import { SingleProposalCard } from './index';


<div style={{listStyle: 'none', padding: '15px', background: '#f2f2f2'}}>
  <SingleProposalCard
    proposal={proposalTypeFixture}
  />
</div>
```