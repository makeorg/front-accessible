##### ProposalAuthorElement Without Avatar Example :
```jsx
import { proposalTypeFixture } from '../../../../shared/types/__fixtures__/proposal.fixture.js';
import { ProposalAuthorElement } from './index';
  <ProposalAuthorElement
    author={proposalTypeFixture.author}
    country={proposalTypeFixture.country}
    language={proposalTypeFixture.language}
    createdAt={proposalTypeFixture.createdAt}
  />
```

##### ProposalAuthorElement With Avatar Example :
```jsx
import { proposalTypeFixture } from '../../../../shared/types/__fixtures__/proposal.fixture.js';
import { ProposalAuthorElement } from './index';
  <ProposalAuthorElement
    author={proposalTypeFixture.author}
    country={proposalTypeFixture.country}
    language={proposalTypeFixture.language}
    createdAt={proposalTypeFixture.createdAt}
    withAvatar
    formattedProposalStatus={proposalTypeFixture.status.lowercase}
  />
```