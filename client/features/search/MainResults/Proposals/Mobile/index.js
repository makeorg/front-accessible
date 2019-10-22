// @flow
import React, { useRef } from 'react';
import { type Proposal as TypeProposal } from 'Shared/types/proposal';
import { type TypeSliderParams } from 'Shared/types/views';
import { ProposalCardWithQuestion } from 'Client/features/proposal/ProposalCardWithQuestion';
import { useSlider } from 'Client/hooks/useSlider';
import { GliderStylesheet } from 'Client/app/assets/css-in-js/GliderStyle';
import { SearchSliderListStyle, SearchSliderListItemStyle } from '../Styled';

type Props = {
  proposals: TypeProposal[],
};

const SEARCH_SLIDER: string = 'search';
const SearchSliderParams: TypeSliderParams = {
  slidesToShow: 1.15,
  interactiveChildren: { links: true, buttons: true },
};

export const MainResultsProposalsMobile = ({ proposals }: Props) => {
  const sliderRef = useRef();
  const hasProposals = proposals.length > 0;
  useSlider(sliderRef, SearchSliderParams, hasProposals);

  return (
    <React.Fragment>
      <GliderStylesheet />
      <div className={`${SEARCH_SLIDER} glider-contain`}>
        <div className={`${SEARCH_SLIDER} glider`} ref={sliderRef}>
          <SearchSliderListStyle className={`${SEARCH_SLIDER} glider-track`}>
            {proposals.map((proposal, index) => (
              <SearchSliderListItemStyle
                key={proposal.id}
                className={SEARCH_SLIDER}
              >
                <ProposalCardWithQuestion
                  proposal={proposal}
                  position={index + 1}
                  size={proposals.length}
                />
              </SearchSliderListItemStyle>
            ))}
          </SearchSliderListStyle>
        </div>
      </div>
    </React.Fragment>
  );
};
