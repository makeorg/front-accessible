// @flow
import React, { useEffect } from 'react';
import { i18n } from 'Shared/i18n';
import { type Proposal as TypeProposal } from 'Shared/types/proposal';
import { useMobile } from 'Client/hooks/useMedia';
import { Spinner } from 'Client/ui/Elements/Loading/Spinner';
import { ProposalCardWithQuestion } from 'Client/features/proposal/ProposalCardWithQuestion';
import { ProposalListSlider, ProposalListStylesheet } from '../Styled/slider';
import {
  ProposalsWrapperStyle,
  ProposalsTitleWrapperStyle,
  ProposalsContentStyle,
  ProposalsIntroStyle,
  ProposalsListStyle,
} from '../Styled';

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
      ProposalListSlider.mount();
    }

    return () => ProposalListSlider.destroy();
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
        <ProposalsTitleWrapperStyle id="popular_proposals_title">
          <ProposalsIntroStyle>
            {i18n.t('homepage.proposals.popular.intro')}
            <React.Fragment> </React.Fragment>
          </ProposalsIntroStyle>
          {i18n.t('homepage.proposals.popular.title')}
        </ProposalsTitleWrapperStyle>
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
