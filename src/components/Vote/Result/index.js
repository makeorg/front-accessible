import React from 'react';
import i18next from 'i18next';
import VoteResults from './Styled';
import VoteButtonComponent from '../Button';
import { UnvoteButton } from '../Styled/Button';
import { HiddenItem } from '../../Elements/HiddenElements';
import { getResultBarIndex, getTooltipIndex } from '../../../helpers/voteresults';
import ResultItemComponent from './Item';
import { getVoteIndex } from '../../../helpers/vote';

class VoteResultComponent extends React.Component {
  render() {
    const {
      votesPercent,
      votesCount,
      voteStaticParams,
      votedKey,
      proposalId,
      handleVote,
      tabIndex
    } = this.props;
    const voteKeys = Object.keys(voteStaticParams);

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
              voteKeys.map(
                voteKey => (
                  <ResultItemComponent
                    key={getVoteIndex(voteKey, proposalId)}
                    listKey={getVoteIndex(voteKey, proposalId)}
                    barKey={getResultBarIndex(voteKey, proposalId)}
                    tooltipKey={getTooltipIndex(voteKey, proposalId)}
                    voteColor={voteStaticParams[voteKey].color}
                    votePercent={votesPercent[voteKey]}
                    tabIndex={tabIndex}
                    voteKey={voteKey}
                  />
                )
              )
            }
          </VoteResults.Graph>
          <VoteResults.TotalLabel>
            <HiddenItem aria-hidden>{i18next.t('results.total_text')}</HiddenItem>
            {i18next.t('vote.label', { count: votesCount })}
          </VoteResults.TotalLabel>
        </aside>
      </VoteResults>
    );
  }
}

export default VoteResultComponent;
