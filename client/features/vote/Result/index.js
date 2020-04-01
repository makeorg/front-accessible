// flow
import * as React from 'react';
import * as VoteResultHelper from 'Shared/helpers/voteResult';
import { type VoteType } from 'Shared/types/vote';
import { ScreenReaderItemStyle } from 'Client/ui/Elements/AccessibilityElements';
import { voteStaticParams } from 'Shared/constants/vote';
import { SvgThumbsUp } from 'Client/ui/Svg/elements';
import { IsVotedButtonStyle } from 'Client/ui/Elements/Vote/Styled';
import { Tooltip } from 'Client/ui/Tooltip';
import { i18n } from 'Shared/i18n';
import {
  VoteResultContainerStyle,
  VoteResultGraphStyle,
  VoteResultItemStyle,
  VoteResultTotalLabelStyle,
  VoteResultBarStyle,
} from './Styled';
import { VoteButton } from '../Button';
import { ResultTooltip } from './Tooltip';

type Props = {
  /** Proposal's Id */
  proposalId: string,
  /** Array of votes */
  votes: VoteType[],
  /** Voted key property */
  votedKey: string,
  /** Method called when vote button is clicked */
  handleVote?: string => void,
  /** When waiting response from API */
  pending?: boolean,
  /** Optional boolean to disable click event on the qualification button */
  disableClick?: boolean,
  /** Optional boolean to enable or not tooltip toggling */
  showTooltip?: boolean,
};

/**
 * Handles Vote Result Business Logic
 */
export const VoteResult = ({
  votes,
  handleVote = () => {},
  votedKey,
  proposalId,
  pending = false,
  disableClick = false,
  showTooltip = true,
}: Props) => {
  const votesCount = VoteResultHelper.getTotalVotesCount(votes);
  const voteKeys = Object.keys(voteStaticParams);
  const votesPercent = VoteResultHelper.getVotesPercent(votes, votesCount);
  const tooltipContent = (percent, voteKey) => (
    <ResultTooltip votePercent={percent} voteKey={voteKey} />
  );

  return (
    <VoteResultContainerStyle>
      <ScreenReaderItemStyle as="p">
        {i18n.t(`results.voted.${votedKey}`)}
      </ScreenReaderItemStyle>
      <VoteButton
        color={voteStaticParams[votedKey].color}
        label={i18n.t('unvote.title')}
        icon={<SvgThumbsUp />}
        transform={voteStaticParams[votedKey].transform}
        handleVote={() => handleVote(votedKey)}
        buttonType={IsVotedButtonStyle}
        displayPending={pending}
        disableClick={disableClick}
        showTooltip={showTooltip}
      />
      <ScreenReaderItemStyle as="p">
        {i18n.t('results.total', { count: votesCount })}
      </ScreenReaderItemStyle>
      <ScreenReaderItemStyle as="ul">
        {voteKeys.map(voteKey => (
          <li key={`${voteKey}_percent_${proposalId}`}>
            {i18n.t('vote.with_percent', {
              votedKey: i18n.t(`vote.${voteKey}`),
              votedPercent: votesPercent[voteKey],
            })}
          </li>
        ))}
      </ScreenReaderItemStyle>
      <VoteResultGraphStyle>
        {voteKeys.map(voteKey => (
          <VoteResultItemStyle key={`${voteKey}_item_${proposalId}`}>
            <Tooltip
              content={tooltipContent(votesPercent[voteKey], voteKey)}
              direction="bottom"
            >
              <VoteResultBarStyle
                tabIndex={0}
                aria-label={i18n.t('common.display_tooltip')}
                color={voteStaticParams[voteKey].color}
                percent={votesPercent[voteKey]}
              />
            </Tooltip>
          </VoteResultItemStyle>
        ))}
      </VoteResultGraphStyle>
      <VoteResultTotalLabelStyle aria-hidden>
        {i18n.t('vote.label', { count: votesCount })}
      </VoteResultTotalLabelStyle>
    </VoteResultContainerStyle>
  );
};
