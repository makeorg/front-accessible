/* @flow */
import * as React from 'react';
import { i18n } from 'Shared/i18n';
import { type VotesPercentObject } from 'Shared/types/proposal';
import { HiddenItemStyle } from 'Client/ui/Elements/HiddenElements';
import { voteStaticParams } from 'Shared/constants/vote';
import { UnvoteButtonStyle } from 'Client/ui/Elements/Vote/Styled';
import { Tooltip } from 'Client/ui/Tooltip';
import { ResultTooltip } from './Tooltip';
import * as VoteResult from './Styled';
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
  /** Method called when vote button is clicked */
  handleVote: () => void,
};

/**
 * Renders Vote Result bar with Tooltip
 */
const VoteResultBarWithTooltip = ({ voteKey, percent, color }) => {
  const content = <ResultTooltip votePercent={percent} voteKey={voteKey} />;
  const children = <VoteResult.BarStyle color={color} percent={percent} />;

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
  } = props;
  const voteKeys = Object.keys(voteStaticParams);

  return (
    <VoteResult.ContainerStyle>
      <HiddenItemStyle aria-hidden as="h3">
        {i18n.t('unvote.title')}
      </HiddenItemStyle>
      <VoteButton
        color={voteStaticParams[votedKey].color}
        label={i18n.t('unvote.button')}
        icon={voteStaticParams[votedKey].icon}
        handleVote={handleVote}
        buttonType={UnvoteButtonStyle}
        displayPending={pending}
      />
      <aside>
        <HiddenItemStyle aria-hidden as="h3">
          {i18n.t('results.title')}
        </HiddenItemStyle>
        <VoteResult.GraphStyle>
          {voteKeys.map(voteKey => (
            <VoteResult.ItemStyle key={`${voteKey}_item_${proposalId}`}>
              <VoteResultBarWithTooltip
                key={`${voteKey}_tooltip_${proposalId}`}
                voteKey={voteKey}
                percent={votesPercent[voteKey]}
                color={voteStaticParams[voteKey].color}
              />
            </VoteResult.ItemStyle>
          ))}
        </VoteResult.GraphStyle>
        <VoteResult.TotalLabelStyle>
          <HiddenItemStyle aria-hidden>
            {i18n.t('results.total_text')}
          </HiddenItemStyle>
          {i18n.t('vote.label', { count: votesCount })}
        </VoteResult.TotalLabelStyle>
      </aside>
    </VoteResult.ContainerStyle>
  );
};
