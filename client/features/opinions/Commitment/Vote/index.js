import React from 'react';
import { ScreenReaderItemStyle } from 'Client/ui/Elements/AccessibilityElements';
import {
  VoteContainerStyle,
  VoteWrapperStyle,
} from 'Client/features/vote/style';
import { i18n } from 'Shared/i18n';
import {
  VoteButtonStyle,
  VoteIconStyle,
} from 'Client/ui/Elements/Buttons/style';
import { opinionsVoteStaticParams } from 'Shared/constants/opinions';

const voteKeys = Object.keys(opinionsVoteStaticParams);

type Props = {
  vote: () => void,
};

export const CommitmentVote = ({ vote }: Props) => (
  <VoteContainerStyle className="opinions">
    <ScreenReaderItemStyle as="p">
      {i18n.t('vote.intro_title')}
    </ScreenReaderItemStyle>
    <VoteWrapperStyle>
      {voteKeys.map(voteKey => (
        <li key={opinionsVoteStaticParams[voteKey].label}>
          <VoteButtonStyle
            aria-label={opinionsVoteStaticParams[voteKey].label}
            className={voteKey}
            data-cy-button="vote"
            data-cy-vote-key={voteKey}
            onClick={() => vote(voteKey)}
          >
            <VoteIconStyle className={voteKey} aria-hidden focusable="false" />
          </VoteButtonStyle>
        </li>
      ))}
    </VoteWrapperStyle>
  </VoteContainerStyle>
);
