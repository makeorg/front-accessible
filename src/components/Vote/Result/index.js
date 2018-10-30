import React from 'react';
import i18next from 'i18next';
import VoteResults from './Styled';
import VoteButtonComponent from '../Button';
import { UnvoteButton } from '../Styled/Button';
import { HiddenItem } from '../../Elements/HiddenElements';
import { getResultBarIndex, getTooltipIndex } from '../../../helpers/voteresults';
import { getVoteIndex } from '../../../helpers/vote';

class VoteResultComponent extends React.Component {
  render() {
    const {
      proposalVotes,
      voteStaticParams,
      votedKey,
      proposalId,
      handleVote,
      tabIndex
    } = this.props;
    return (
      <VoteResults>
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
          <VoteResults.Graph>
            {
              proposalVotes.map(
                proposalVote => (
                  <li key={getVoteIndex(proposalVote.voteKey, proposalId)}>
                    <VoteResults.Bar
                      key={getResultBarIndex(proposalVote.voteKey, proposalId)}
                      color={voteStaticParams[proposalVote.voteKey].color}
                      percent={50}
                      tabIndex={tabIndex}
                      aria-hidden
                    />
                    <VoteResults.Tooltip
                      key={getTooltipIndex(proposalVote.voteKey, proposalId)}
                      voteKey={proposalVote.voteKey}
                    >
                      <p>{i18next.t(`vote.${proposalVote.voteKey}`)}</p>
                      <p>Votes %</p>
                    </VoteResults.Tooltip>
                  </li>
                )
              )
            }
          </VoteResults.Graph>
          <VoteResults.TotalLabel>
            <HiddenItem aria-hidden as="h3">{i18next.t('results.total_text')}</HiddenItem>
            Nb votes
          </VoteResults.TotalLabel>
        </aside>
      </VoteResults>
    );
  }
}

export default VoteResultComponent;
