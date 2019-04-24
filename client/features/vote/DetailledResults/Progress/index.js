import React from 'react';
import { i18n } from 'Shared/i18n';
import { getTotalVotesCount, getVotesPercent } from 'Shared/helpers/voteResult';
import { voteStaticParams } from 'Shared/constants/vote';
import {
  VoteProgressContainerStyle,
  VoteProgressWrapperStyle,
  VoteCounterStyle,
  VoteProgressItemStyle,
} from '../Styled/Progress';

type Props = {
  votes: VoteType[],
};

export const VoteProgress = (props: Props) => {
  const { votes, proposalId } = props;
  const votesCount = getTotalVotesCount(votes);
  const votesPercent = getVotesPercent(votes, votesCount);
  return (
    <VoteProgressContainerStyle>
      <VoteCounterStyle>
        {i18n.t('vote.label', { count: votesCount })}
      </VoteCounterStyle>
      <VoteProgressWrapperStyle>
        {votes.map(vote => (
          <VoteProgressItemStyle
            key={`vote_progress_${proposalId}_${vote.voteKey}`}
            color={voteStaticParams[vote.voteKey].color}
            percent={votesPercent[vote.voteKey]}
          />
        ))}
      </VoteProgressWrapperStyle>
    </VoteProgressContainerStyle>
  );
};
