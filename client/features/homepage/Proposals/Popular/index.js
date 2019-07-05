// @flow
import React, { useEffect } from 'react';
import { createGlobalStyle } from 'styled-components';
import Glide from '@glidejs/glide';
import { i18n } from 'Shared/i18n';
import { type Proposal as TypeProposal } from 'Shared/types/proposal';
import { useMobile } from 'Client/hooks/useMedia';
import { Spinner } from 'Client/ui/Elements/Loading/Spinner';
import { HomeTitleStyle } from 'Client/ui/Elements/TitleElements';
import { ProposalCardWithQuestion } from 'Client/features/proposal/ProposalCardWithQuestion';
import {
  ProposalsWrapperStyle,
  ProposalsContentStyle,
  ProposalsIntroStyle,
  ProposalsListStyle,
} from '../Styled';

export const ProposalListStylesheet = createGlobalStyle`
  .popular_proposal_wrapper{
    overflow: hidden;
    display: flex;
    flex-flow: column;
    align-items: center;
    width: 100%;
  }
  .popular_proposal {
    position: relative;
    width: 100%;
    box-sizing: border-box; 
  }
  .popular_proposal * {
    box-sizing: inherit; 
  }
  .popular_proposal__track {
    overflow: hidden; 
  }
  .popular_proposal__slides {
    position: relative;
    width: 100%;
    list-style: none;
    backface-visibility: hidden;
    transform-style: preserve-3d;
    touch-action: pan-Y;
    overflow: hidden;
    padding: 0;
    white-space: nowrap;
    display: flex;
    flex-wrap: nowrap;
    will-change: transform; 
  }
  .popular_proposal__slides--dragging {
    user-select: none; 
  }
  .popular_proposal__slide {
    display: flex;
    width: 100%;
    height: auto;
    flex-shrink: 0;
    white-space: normal;
    user-select: none;
    -webkit-touch-callout: none;
    -webkit-tap-highlight-color: transparent; 
  }
  .popular_proposal__slide a {
    user-select: none;
    -webkit-user-drag: none;
    -moz-user-select: none;
    -ms-user-select: none; 
  }
  .popular_proposal__arrows {
    -webkit-touch-callout: none;
    user-select: none; 
  }
  .popular_proposal__bullets {
    -webkit-touch-callout: none;
    user-select: none; 
  }
  .popular_proposal--rtl {
    direction: rtl; 
  }
`;

const slider = new Glide('.popular_proposal', {
  type: 'carousel',
  rewind: false,
  peek: {
    before: 0,
    after: 70,
  },
  classes: {
    direction: {
      ltr: 'popular_proposal--ltr',
      rtl: 'popular_proposal--rtl',
    },
    slider: 'popular_proposal--slider',
    carousel: 'popular_proposal--carousel',
    swipeable: 'popular_proposal--swipeable',
    dragging: 'popular_proposal--dragging',
    cloneSlide: 'popular_proposal__slide--clone',
    activeNav: 'popular_proposal__bullet--active',
    activeSlide: 'popular_proposal__slide--active',
    disabledArrow: 'popular_proposal__arrow--disabled',
  },
});

type PopularProposalsProps = {
  proposals: TypeProposal[],
  isLoading: boolean,
};

export const PopularProposals = ({
  proposals,
  isLoading,
}: PopularProposalsProps) => {
  const isMobile = useMobile();
  const proposalsLength = proposals.length;

  useEffect(() => {
    if (!proposalsLength) {
      return undefined;
    }

    if (isMobile) {
      slider.mount();
    }

    return () => slider.destroy();
  }, [proposalsLength, isMobile]);

  if (!proposalsLength) {
    return null;
  }

  if (isLoading) {
    return <Spinner />;
  }

  if (proposalsLength === 0) {
    return null;
  }

  return (
    <ProposalsWrapperStyle>
      <ProposalsContentStyle aria-labelledby="popular_proposals_title">
        <HomeTitleStyle id="popular_proposals_title">
          <ProposalsIntroStyle>
            {i18n.t('homepage.proposals.popular.intro')}
            <React.Fragment> </React.Fragment>
          </ProposalsIntroStyle>
          {i18n.t('homepage.proposals.popular.title')}
        </HomeTitleStyle>
        {isMobile ? (
          <div className="popular_proposal_wrapper">
            <ProposalListStylesheet />
            <div className="popular_proposal">
              <div className="popular_proposal__track" data-glide-el="track">
                <ul className="popular_proposal__slides">
                  {proposals.map((proposal, index) => (
                    <li key={proposal.id} className="popular_proposal__slide">
                      <ProposalCardWithQuestion
                        proposal={proposal}
                        position={index + 1}
                        size={2}
                        withOrganisations
                      />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ) : (
          <ProposalsListStyle>
            {proposals.map((proposal, index) => (
              <ProposalCardWithQuestion
                key={proposal.id}
                proposal={proposal}
                position={index + 1}
                size={2}
              />
            ))}
          </ProposalsListStyle>
        )}
      </ProposalsContentStyle>
    </ProposalsWrapperStyle>
  );
};
