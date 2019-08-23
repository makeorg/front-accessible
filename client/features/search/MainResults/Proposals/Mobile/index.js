// @flow
import React from 'react';
import { type Proposal as TypeProposal } from 'Shared/types/proposal';
import { ProposalCardWithQuestion } from 'Client/features/proposal/ProposalCardWithQuestion';
import { useSlider } from 'Client/hooks/useSlider';
import { SearchSliderParams, SearchSliderStylesheet } from './slider';

type Props = {
  proposals: TypeProposal[],
};
export const MainResultsProposalsMobile = ({ proposals }: Props) => {
  const proposalsLength = proposals.length <= 0;
  useSlider('searchslider', SearchSliderParams, proposalsLength);

  return (
    <React.Fragment>
      <SearchSliderStylesheet />
      <div className="searchslider">
        <div className="searchslider__track" data-glide-el="track">
          <ul className="searchslider__slides">
            {proposals.map((proposal, index) => (
              <li key={proposal.id} className="searchslider__slide">
                <ProposalCardWithQuestion
                  proposal={proposal}
                  position={index + 1}
                  size={proposals.length}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </React.Fragment>
  );
};
