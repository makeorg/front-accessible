import React from 'react';
import i18next from 'i18next';
import Vote from './Styled';
import { VoteButton } from './Styled/Button';
import { HiddenItem } from '../Elements/HiddenElements';
import { getVoteIndex } from '../../helpers/vote';
import VoteButtonComponent from './Button';

const VoteButtons = ({
  voteKeys,
  proposalId,
  voteStaticParams,
  handleVote,
  tabIndex
}) => (
  voteKeys.map(voteKey => (
    <VoteButtonComponent
      key={getVoteIndex(voteKey, proposalId)}
      color={voteStaticParams[voteKey].color}
      label={i18next.t(`vote.${voteKey}`)}
      icon={voteStaticParams[voteKey].icon}
      rotate={voteStaticParams[voteKey].rotate}
      handleVote={event => handleVote(event, voteKey)}
      buttonType={VoteButton}
      tabIndex={tabIndex}
    />
  ))
);

class VoteComponent extends React.Component {
  render() {
    const {
      voteStaticParams,
      proposalId,
      hasVoted,
      votedKey,
      handleVote,
      tabIndex
    } = this.props;
    const voteKeys = Object.keys(voteStaticParams);

    return (
      <Vote>
        <HiddenItem aria-hidden as="h3">{i18next.t('vote.intro_title')}</HiddenItem>
        <HiddenItem aria-hidden>{i18next.t('vote.intro_text')}</HiddenItem>
        <Vote.Wrapper>
          <VoteButtons
            tabIndex={tabIndex}
            voteKeys={voteKeys}
            proposalId={proposalId}
            hasVoted={hasVoted}
            votedKey={votedKey}
            voteStaticParams={voteStaticParams}
            handleVote={handleVote}
          />
        </Vote.Wrapper>
      </Vote>
    );
  }
}

export default VoteComponent;
