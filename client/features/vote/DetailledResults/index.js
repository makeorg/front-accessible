// @flow
import React from 'react';
import { getTotalVotesCount, getVotesPercent } from 'Shared/helpers/voteResult';
import { type VoteType } from 'Shared/types/proposal';
import { DetailledResultItem } from './Item';
import { VoteProgress } from './Progress';
import { DetailledItemListStyle } from './Styled';

type Props = {
  votes: VoteType[],
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
