import React from 'react';
import i18next from 'i18next';
import VoteResults from './Styled';
import VoteButtonComponent from '../Button';
import { UnvoteButton } from '../Styled/Button';
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
        <VoteButtonComponent
          color={voteStaticParams[votedKey].color}
          label={voteStaticParams[votedKey].label}
          icon={voteStaticParams[votedKey].icon}
          rotate={voteStaticParams[votedKey].rotate}
          handleVote={event => handleVote(event, votedKey)}
          buttonType={UnvoteButton}
          tabIndex={tabIndex}
        />
        <aside>
          <VoteResults.Graph>
            {
              proposalVotes.map(
                proposalVote => (
                  <React.Fragment key={getVoteIndex(proposalVote.voteKey, proposalId)}>
                    <VoteResults.Bar
                      key={getResultBarIndex(proposalVote.voteKey, proposalId)}
                      color={voteStaticParams[proposalVote.voteKey].color}
                      percent={50}
                      tabIndex={tabIndex}
                    />
                    <VoteResults.Tooltip
                      key={getTooltipIndex(proposalVote.voteKey, proposalId)}
                      voteKey={proposalVote.voteKey}
                    >
                      <p>{i18next.t(`vote.${proposalVote.voteKey}`)}</p>
                      <p>Votes %</p>
                    </VoteResults.Tooltip>
                  </React.Fragment>
                )
              )
            }
          </VoteResults.Graph>
          <VoteResults.TotalLabel>
            Nb votes
          </VoteResults.TotalLabel>
        </aside>
      </VoteResults>
    );
  }
}

export default VoteResultComponent;
