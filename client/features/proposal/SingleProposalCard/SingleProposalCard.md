##### SingleProposalCard Example :
```js
import { proposalTypeFixture } from '../../../../shared/types/__fixtures__/proposal.fixture.js';
import { questionConfigurationFixture }  from '../../../../shared/types/__fixtures__/sequence.fixture.js';
import { SingleProposalCard } from './index';

<SingleProposalCard
  proposal={proposalTypeFixture}
  questionConfiguration={questionConfigurationFixture}
/>
```