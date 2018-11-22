import React from 'react';
import i18next from 'i18next';
import VoteResult from './Styled';
import VoteButtonComponent from '../Button';
import { UnvoteButton } from '../Styled/Button';
import { HiddenItem } from '../../Elements/HiddenElements';
import ResultItemContainer from '../../../containers/Vote/Result/Item';
import voteStaticParams from '../../../constants/vote';

class VoteResultComponent extends React.Component {
  render() {
    const {
      votesPercent,
      votesCount,
      votedKey,
      proposalId,
      handleVote,
      tabIndex,
      index
    } = this.props;
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
                index={index}
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
  }
}

export default VoteResultComponent;
