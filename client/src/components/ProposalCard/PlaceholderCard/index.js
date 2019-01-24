import * as React from 'react';
import ProposalCard from '../Styled';

/**
 * Renders Proposal Placeholder used when the Sequence is loading
 */
const PlaceholderCardComponent = () => (
  <ProposalCard
    as="div"
    scale="1"
    zindex="1"
  >
    <ProposalCard.PlaceholderWrapper>
      <ProposalCard.PlaceholderTitle />
      <ProposalCard.PlaceholderSeparator />
      <ProposalCard.PlaceholderDescription />
      <ProposalCard.PlaceholderDescription />
      <ProposalCard.PlaceholderButton />
    </ProposalCard.PlaceholderWrapper>
  </ProposalCard>
);

export default PlaceholderCardComponent;
