/* @flow */
import * as React from 'react';
import { i18n } from 'Shared/i18n';
import { type VotesPercentObject } from 'Shared/types/proposal';
import { HiddenItemStyle } from 'Client/ui/Elements/HiddenElements';
import { voteStaticParams } from 'Shared/constants/vote';
import { UnvoteButtonStyle } from 'Client/ui/Elements/Vote/Styled';
import { TooltipWithTrigger } from 'Client/ui/Tooltip';
import { BottomTooltipStyle } from 'Client/ui/Elements/TooltipElements';
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
  /** Id of vote button */
  id: string,
  /** When waiting response from API */
  pending: boolean,
  /** Method called when vote button is clicked */
  handleVote: () => void,
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
    id,
    pending,
  } = props;
  const voteKeys = Object.keys(voteStaticParams);

  return (
    <VoteResult.ContainerStyle>
      <HiddenItemStyle aria-hidden as="h3">
        {i18n.t('unvote.title')}
      </HiddenItemStyle>
      <VoteButton
        id={id}
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
            <TooltipWithTrigger
              key={`${voteKey}_item_${proposalId}`}
              tooltipWrapper={VoteResult.ItemStyle}
              tooltipType={BottomTooltipStyle}
              triggerContent={
                // eslint-disable-next-line react/jsx-wrap-multilines
                <VoteResult.BarStyle
                  color={voteStaticParams[voteKey].color}
                  percent={votesPercent[voteKey]}
                />
              }
              ariaLabelDisplay={i18n.t(
                `results.tooltipbutton.display.${voteKey}`
              )}
              ariaLabelHide={i18n.t(`results.tooltipbutton.hide.${voteKey}`)}
            >
              <ResultTooltip
                votePercent={votesPercent[voteKey]}
                voteKey={voteKey}
              />
            </TooltipWithTrigger>
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
