/* @flow */
import * as React from 'react';
import { i18n } from 'Shared/i18n';
import { type VotesPercentObject } from 'Shared/types/proposal';
import { ReadableItemStyle } from 'Client/ui/Elements/HiddenElements';
import { voteStaticParams } from 'Shared/constants/vote';
import { IsVotedButtonStyle } from 'Client/ui/Elements/Vote/Styled';
import { Tooltip } from 'Client/ui/Tooltip';
import { ResultTooltip } from './Tooltip';
import {
  VoteResultContainerStyle,
  VoteResultGraphStyle,
  VoteResultItemStyle,
  VoteResultBarStyle,
  VoteResultTotalLabelStyle,
} from './Styled';
import { VoteButton } from '../Button';

type Props = {
  /** Object with votes percentage results */
  votesPercent: VotesPercentObject,
  /** Number of votes */
  votesCount: number,
  /** Voted key property */
  votedKey: string,
  /** Proposal's ID */
  proposalId: string,
  /** When waiting response from API */
  pending: boolean,
  /** Show the label of the vote result */
  withLabel: boolean,
  /** Method called when vote button is clicked */
  handleVote: () => void,
};

/**
 * Renders Vote Result bar with Tooltip
 */
const VoteResultBarWithTooltip = ({ voteKey, percent, color }) => {
  const content = <ResultTooltip votePercent={percent} voteKey={voteKey} />;
  const children = (
    <VoteResultBarStyle
      tabIndex={0}
      aria-label={i18n.t('common.display_tooltip')}
      color={color}
      percent={percent}
    />
  );

  return (
    <Tooltip content={content} direction="bottom">
      {children}
    </Tooltip>
  );
};

/**
 * Renders Vote Result component
 */
export const VoteResultComponent = (props: Props) => {
  const {
    votesPercent,
    votesCount,
    votedKey,
    proposalId,
    handleVote,
    pending,
    withLabel,
  } = props;
  const voteKeys = Object.keys(voteStaticParams);

  return (
    <VoteResultContainerStyle>
      <ReadableItemStyle as="p">
        {i18n.t(`results.voted.${votedKey}`)}
      </ReadableItemStyle>
      <VoteButton
        color={voteStaticParams[votedKey].color}
        label={i18n.t('unvote.title')}
        icon={voteStaticParams[votedKey].icon}
        handleVote={handleVote}
        buttonType={IsVotedButtonStyle}
        displayPending={pending}
        showTooltip={withLabel}
      />
      <ReadableItemStyle as="p">
        {i18n.t('results.total', { count: votesCount })}
      </ReadableItemStyle>
      <VoteResultGraphStyle>
        {voteKeys.map(voteKey => (
          <VoteResultItemStyle key={`${voteKey}_item_${proposalId}`}>
            <VoteResultBarWithTooltip
              key={`${voteKey}_tooltip_${proposalId}`}
              voteKey={voteKey}
              percent={votesPercent[voteKey]}
              color={voteStaticParams[voteKey].color}
            />
          </VoteResultItemStyle>
        ))}
      </VoteResultGraphStyle>
      <VoteResultTotalLabelStyle aria-hidden>
        {i18n.t('vote.label', { count: votesCount })}
      </VoteResultTotalLabelStyle>
    </VoteResultContainerStyle>
  );
};
