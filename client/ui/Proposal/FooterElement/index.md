##### ProposalFooterWithTagElement Example :
```jsx
import { proposalTypeFixture } from '../../../../shared/types/__fixtures__/proposal.fixture.js';
import { ProposalFooterWithTagElement } from './index';
  <ProposalFooterWithTagElement
    tags={proposalTypeFixture.tags}
  />
```

##### ProposalFooterWithQuestionElement Example :
```jsx
import { proposalTypeFixture } from '../../../../shared/types/__fixtures__/proposal.fixture.js';
import { ProposalFooterWithQuestionElement } from './index';
  <ProposalFooterWithQuestionElement
    question={proposalTypeFixture.question}
    consultationLink='#'
    isProposalAccepted
  />
```