// @flow
import React from 'react';
import { getVotesCount, getVotePercent } from 'Shared/helpers/voteResult';
import { type VoteType } from 'Shared/types/proposal';
import { DetailledResultItem } from './Item';
import { VoteProgress } from './Progress';
import { DetailledItemListStyle } from './Styled';

type Props = {
  votes: VoteType[],
};

export const DetailledVoteResults = (props: Props) => {
  const { votes } = props;
  const votesCount = getVotesCount(votes);
  return (
    <React.Fragment>
      <VoteProgress votes={votes} />
      <DetailledItemListStyle>
        {votes.map(vote => (
          <DetailledResultItem
            key={vote.voteKey}
            vote={vote}
            votePercent={getVotePercent(vote.count, votesCount)}
          />
        ))}
      </DetailledItemListStyle>
    </React.Fragment>
  );
};
