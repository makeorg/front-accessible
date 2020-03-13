// @flow

import React from 'react';
import { FEED_PROPOSAL, FEED_TOP_PROPOSALS } from 'Shared/constants/card';
import { ProposalCardTagged } from 'Client/features/proposal/ProposalCardTagged';
import { PopularProposals } from 'Client/features/flipping/PopularProposals';
import {
  TopComponentContext,
  type TopComponentContextValueType,
  TopComponentContextValue,
} from 'Client/context/TopComponentContext';

type Props = {
  card: any,
  index: number,
  proposalsLength: number,
};

export const ProposalType = ({ card, index, proposalsLength }: Props) => {
  switch (card.type) {
    case FEED_PROPOSAL: {
      const topComponentContext: TopComponentContextValueType = TopComponentContextValue.getProposalList();
      return (
        <TopComponentContext.Provider value={topComponentContext}>
          <ProposalCardTagged
            position={index + 1}
            size={proposalsLength}
            proposal={card.proposal}
          />
        </TopComponentContext.Provider>
      );
    }
    case FEED_TOP_PROPOSALS: {
      const topComponentContext: TopComponentContextValueType = TopComponentContextValue.getPopularProposalsTop();
      return (
        <TopComponentContext.Provider value={topComponentContext}>
          <PopularProposals
            question={card.question}
            position={index + 1}
            size={proposalsLength}
          />
        </TopComponentContext.Provider>
      );
    }
    default:
      return null;
  }
};
