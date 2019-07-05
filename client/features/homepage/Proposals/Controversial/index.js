// @flow
import React, { useEffect } from 'react';
import { createGlobalStyle } from 'styled-components';
import Glide from '@glidejs/glide';
import { i18n } from 'Shared/i18n';
import { type Proposal as TypeProposal } from 'Shared/types/proposal';
import { HomeTitleStyle } from 'Client/ui/Elements/TitleElements';
import { Spinner } from 'Client/ui/Elements/Loading/Spinner';
import { ProposalCardWithQuestion } from 'Client/features/proposal/ProposalCardWithQuestion';
import { useMobile } from 'Client/hooks/useMedia';
import {
  ProposalsWrapperStyle,
  ProposalsContentStyle,
  ProposalsIntroStyle,
  ProposalsListStyle,
} from '../Styled';

export const ControversialStylesheet = createGlobalStyle`
  .controversial_proposal_wrapper{
    overflow: hidden;
    display: flex;
    flex-flow: column;
    align-items: center;
    width: 100%;
  }
  .controversial_proposal {
    position: relative;
    width: 100%;
    box-sizing: border-box; 
  }
  .controversial_proposal * {
    box-sizing: inherit; 
  }
  .controversial_proposal__track {
    overflow: hidden; 
  }
  .controversial_proposal__slides {
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
  .controversial_proposal__slides--dragging {
    user-select: none; 
  }
  .controversial_proposal__slide {
    display: flex;
    width: 100%;
    height: auto;
    white-space: normal;
    user-select: none;
    -webkit-touch-callout: none;
    -webkit-tap-highlight-color: transparent; 
  }
  .controversial_proposal__slide a {
    user-select: none;
    -webkit-user-drag: none;
    -moz-user-select: none;
    -ms-user-select: none; 
  }
  .controversial_proposal__arrows {
    -webkit-touch-callout: none;
    user-select: none; 
  }
  .controversial_proposal__bullets {
    -webkit-touch-callout: none;
    user-select: none; 
  }
  .controversial_proposal--rtl {
    direction: rtl; 
  }
`;

const slider = new Glide('.controversial_proposal', {
  type: 'carousel',
  rewind: false,
  peek: {
    before: 0,
    after: 70,
  },
  classes: {
    direction: {
      ltr: 'controversial_proposal--ltr',
      rtl: 'controversial_proposal--rtl',
    },
    slider: 'controversial_proposal--slider',
    carousel: 'controversial_proposal--carousel',
    swipeable: 'controversial_proposal--swipeable',
    dragging: 'controversial_proposal--dragging',
    cloneSlide: 'controversial_proposal__slide--clone',
    activeNav: 'controversial_proposal__bullet--active',
    activeSlide: 'controversial_proposal__slide--active',
    disabledArrow: 'controversial_proposal__arrow--disabled',
  },
});

type ControversialProposalsProps = {
  proposals: TypeProposal[],
  isLoading: boolean,
};

export const ControversialProposals = ({
  proposals,
  isLoading,
}: ControversialProposalsProps) => {
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

  if (isLoading) {
    return <Spinner />;
  }

  if (proposalsLength === 0) {
    return null;
  }

  return (
    <ProposalsWrapperStyle>
      <ProposalsContentStyle aria-labelledby="controversial_proposals_title">
        <HomeTitleStyle id="controversial_proposals_title">
          <ProposalsIntroStyle>
            {i18n.t('homepage.proposals.controversial.intro')}
            <React.Fragment> </React.Fragment>
          </ProposalsIntroStyle>
          {i18n.t('homepage.proposals.controversial.title')}
        </HomeTitleStyle>
        {isMobile ? (
          <div className="controversial_proposal_wrapper">
            <ControversialStylesheet />
            <div className="controversial_proposal">
              <div
                className="controversial_proposal__track"
                data-glide-el="track"
              >
                <ul className="controversial_proposal__slides">
                  {proposals.map((proposal, index) => (
                    <li
                      key={proposal.id}
                      className="controversial_proposal__slide"
                    >
                      <ProposalCardWithQuestion
                        proposal={proposal}
                        position={index + 1}
                        size={2}
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
