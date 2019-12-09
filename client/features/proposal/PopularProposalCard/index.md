##### PopularProposalCard Example :

```jsx
import { proposalTypeFixture } from '../../../../shared/types/__fixtures__/proposal.fixture.js';
import { PopularProposalCard } from './index';

<ol
  style={{
    width: '100% ',
    height: '440px',
    listStyle: 'none',
    padding: '15px',
    background: '#f2f2f2',
  }}
>
  <PopularProposalCard proposal={proposalTypeFixture} />
</ol>;
```
