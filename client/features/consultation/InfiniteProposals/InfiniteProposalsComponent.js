/* @flow */
import React from 'react';
import { type ProposalType } from 'Shared/types/proposal';
import { type Question } from 'Shared/types/question';
import { ProposalCardTagged } from 'Client/features/proposal/ProposalCardTagged';
import { Spinner } from 'Client/ui/Elements/Loading/Spinner';
import { RedButtonStyle } from 'Client/ui/Elements/ButtonElements';
import { i18n } from 'Shared/i18n';
import { LoadMoreWrapperStyle } from '../Styled/Proposal';

type Props = {
  question: Question,
  proposals: ProposalType[],
  isLoading: boolean,
  initialLoading: boolean,
  clickLoadMore: () => void,
};

export const InfiniteProposalsComponent = (props: Props) => {
  const {
    question,
    proposals,
    isLoading,
    initialLoading,
    clickLoadMore,
  } = props;
  const proposalsLength = proposals.length;
  const displayLoadMoreButton = initialLoading && !isLoading;

  return (
    <div role="feed" aria-busy={isLoading}>
      {proposals &&
        proposals.map((proposal, index) => (
          <ProposalCardTagged
            question={question}
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
