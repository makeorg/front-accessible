import React from 'react';
import { ScreenReaderItemStyle } from 'Client/ui/Elements/AccessibilityElements';
import {
  VoteContainerStyle,
  VoteWrapperStyle,
} from 'Client/features/vote/Styled';
import { i18n } from 'Shared/i18n';
import {
  VoteButtonStyle,
  ButtonIconWrapperStyle,
} from 'Client/ui/Elements/Vote/Styled';
import { opinionsVoteStaticParams } from 'Shared/constants/opinions';
import { SvgThumbsUp } from 'Client/ui/Svg/elements';

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
            color={opinionsVoteStaticParams[voteKey].color}
            className={voteKey}
            data-cy-button="vote"
            data-cy-vote-key={voteKey}
            onClick={() => vote(voteKey)}
          >
            <ButtonIconWrapperStyle
              transform={opinionsVoteStaticParams[voteKey].transform}
            >
              <SvgThumbsUp />
            </ButtonIconWrapperStyle>
          </VoteButtonStyle>
        </li>
      ))}
    </VoteWrapperStyle>
  </VoteContainerStyle>
);
