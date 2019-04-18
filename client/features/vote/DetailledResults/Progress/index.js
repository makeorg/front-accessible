import React from 'react';
import { i18n } from 'Shared/i18n';
import { getVotesCount, getVotePercent } from 'Shared/helpers/voteResult';
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
  const { votes } = props;
  const votesCount = getVotesCount(votes);

  return (
    <VoteProgressContainerStyle>
      <VoteCounterStyle>
        {i18n.t('vote.label', { count: votesCount })}
      </VoteCounterStyle>
      <VoteProgressWrapperStyle>
        {votes.map(vote => (
          <VoteProgressItemStyle
            color={voteStaticParams[vote.voteKey].color}
            percent={getVotePercent(vote.count, votesCount)}
          />
        ))}
      </VoteProgressWrapperStyle>
    </VoteProgressContainerStyle>
  );
};
