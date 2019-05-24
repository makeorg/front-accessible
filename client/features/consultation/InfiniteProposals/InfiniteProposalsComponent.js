/* @flow */
import React from 'react';
import { type Proposal as TypeProposal } from 'Shared/types/proposal';
import { ProposalCardTagged } from 'Client/features/proposal/ProposalCardTagged';
import { Spinner } from 'Client/ui/Elements/Loading/Spinner';
import { RedButtonStyle } from 'Client/ui/Elements/ButtonElements';
import { i18n } from 'Shared/i18n';
import { LoadMoreWrapperStyle } from '../Styled/Proposal';

type Props = {
  proposals: TypeProposal[],
  page: number,
  hasMore: boolean,
  isLoading: boolean,
  clickLoadMore: () => void,
};

export const InfiniteProposalsComponent = (props: Props) => {
  const { proposals, page, hasMore, isLoading, clickLoadMore } = props;
  const proposalsLength = proposals.length;
  const displayLoadMoreButton = hasMore && !isLoading && page <= 1;

  return (
    <div id="proposal_list" role="feed" aria-busy={isLoading}>
      {proposals &&
        proposals.map((proposal, index) => (
          <ProposalCardTagged
            position={index + 1}
            size={proposalsLength}
            key={proposal.id}
            proposal={proposal}
          />
        ))}
      {isLoading && <Spinner />}
      {displayLoadMoreButton && (
        <LoadMoreWrapperStyle>
          <RedButtonStyle onClick={clickLoadMore}>
            {i18n.t('consultation.proposal.load_more')}
          </RedButtonStyle>
        </LoadMoreWrapperStyle>
      )}
    </div>
  );
};
