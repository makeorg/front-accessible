// @flow
import React from 'react';
import { getTotalVotesCount, getVotesPercent } from 'Shared/helpers/voteResult';
import { type Vote as TypeVote } from 'Shared/types/proposal';
import { ScreenReaderItemStyle } from 'Client/ui/Elements/AccessibilityElements';
import { i18n } from 'Shared/i18n';
import { DetailledResultItem } from './Item';
import { VoteProgress } from './Progress';
import { DetailledItemListStyle } from './Styled';

type Props = {
  votes: TypeVote[],
  proposalId: string,
};

export const DetailledVoteResults = (props: Props) => {
  const { votes, proposalId } = props;
  const totalVotesCount = getTotalVotesCount(votes);
  const votesPercent = getVotesPercent(votes, totalVotesCount);

  return (
    <React.Fragment>
      <VoteProgress
        key={`vote_progress_${proposalId}`}
        votes={votes}
        proposalId={proposalId}
      />
      <ScreenReaderItemStyle>
        {i18n.t('results.static_repartition')}
      </ScreenReaderItemStyle>
      <DetailledItemListStyle>
        {votes.map(vote => (
          <DetailledResultItem
            key={`detail_result_${proposalId}_${vote.voteKey}`}
            vote={vote}
            votePercent={votesPercent[vote.voteKey]}
          />
        ))}
      </DetailledItemListStyle>
    </React.Fragment>
  );
};
