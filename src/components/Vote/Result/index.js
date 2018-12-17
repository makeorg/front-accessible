/* @flow */
import * as React from 'react';
import i18next from 'i18next';
import { HiddenItem } from 'Components/Elements/HiddenElements';
import ResultItemContainer from 'Containers/Vote/Result/Item';
import voteStaticParams from 'Constants/vote';
import VoteButtonComponent from '../Button';
import VoteResult from './Styled';
import { UnvoteButton } from '../Styled/Button';

type Props = {
  /** Method used to calculate percentage of votes */
  votesPercent: Function,
  /** Number of votes */
  votesCount: number,
  /** Voted key property */
  votedKey: string,
  /** Proposal's ID */
  proposalId: string,
  /** Method called when vote button is clicked */
  handleVote: Function,
  /** Tabindex for interactive items */
  tabIndex: number
}

/**
 * Renders Vote Result component
 */
const VoteResultComponent = (props: Props) => {
  const {
    votesPercent,
    votesCount,
    votedKey,
    proposalId,
    handleVote,
    tabIndex
  } = props;
  const voteKeys = Object.keys(voteStaticParams);

  return (
    <VoteResult>
      <HiddenItem aria-hidden as="h3">{i18next.t('unvote.title')}</HiddenItem>
      <VoteButtonComponent
        color={voteStaticParams[votedKey].color}
        label={i18next.t('unvote.button')}
        icon={voteStaticParams[votedKey].icon}
        rotate={voteStaticParams[votedKey].rotate}
        handleVote={event => handleVote(event, votedKey)}
        buttonType={UnvoteButton}
        tabIndex={tabIndex}
      />
      <aside>
        <HiddenItem aria-hidden as="h3">{i18next.t('results.title')}</HiddenItem>
        <VoteResult.Graph>
          {voteKeys.map(voteKey => (
            <ResultItemContainer
              key={`${voteKey}_item_${proposalId}`}
              proposalId={proposalId}
              tabIndex={tabIndex}
              voteKey={voteKey}
              voteStaticParams={voteStaticParams}
              votesPercent={votesPercent}
            />
          ))}
        </VoteResult.Graph>
        <VoteResult.TotalLabel>
          <HiddenItem aria-hidden>{i18next.t('results.total_text')}</HiddenItem>
          {i18next.t('vote.label', { count: votesCount })}
        </VoteResult.TotalLabel>
      </aside>
    </VoteResult>
  );
};

export default VoteResultComponent;
