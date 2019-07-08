// @flow
import React, { useEffect } from 'react';
import { i18n } from 'Shared/i18n';
import { type Proposal as TypeProposal } from 'Shared/types/proposal';
import { Spinner } from 'Client/ui/Elements/Loading/Spinner';
import { ProposalCardWithQuestion } from 'Client/features/proposal/ProposalCardWithQuestion';
import { useMobile } from 'Client/hooks/useMedia';
import { ControversialSlider, ControversialStylesheet } from '../Styled/slider';
import {
  ProposalsWrapperStyle,
  ProposalsTitleWrapperStyle,
  ProposalsContentStyle,
  ProposalsIntroStyle,
  ProposalsListStyle,
} from '../Styled';

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
      ControversialSlider.mount();
    }

    return () => ControversialSlider.destroy();
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
        <ProposalsTitleWrapperStyle id="controversial_proposals_title">
          <ProposalsIntroStyle>
            {i18n.t('homepage.proposals.controversial.intro')}
            <React.Fragment> </React.Fragment>
          </ProposalsIntroStyle>
          {i18n.t('homepage.proposals.controversial.title')}
        </ProposalsTitleWrapperStyle>
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
