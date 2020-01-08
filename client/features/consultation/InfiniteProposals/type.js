// @flow

import React from 'react';
import { FEED_PROPOSAL, FEED_TOP_PROPOSALS } from 'Shared/constants/card';
import { ProposalCardTagged } from 'Client/features/proposal/ProposalCardTagged';
import { PopularProposals } from 'Client/features/flipping/PopularProposals';

type Props = {
  card: any,
  index: number,
  proposalsLength: number,
};

export const ProposalType = ({ card, index, proposalsLength }: Props) => {
  switch (card.type) {
    case FEED_PROPOSAL:
      return (
        <ProposalCardTagged
          position={index + 1}
          size={proposalsLength}
          proposal={card.proposal}
        />
      );
    case FEED_TOP_PROPOSALS:
      return (
        <PopularProposals
          question={card.question}
          position={index + 1}
          size={proposalsLength}
        />
      );
    default:
      return null;
  }
};
