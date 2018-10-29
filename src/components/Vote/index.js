import React from 'react';
import i18next from 'i18next';
import Vote from './Styled';
import { HiddenItem } from '../Elements/HiddenElements';
import { getVoteIndex } from '../../helpers/vote';
import VoteButtonComponent from './Button';

const VoteButtons = ({
  voteKeys,
  proposalId,
  voteStaticParams,
  handleVote
}) => (
  voteKeys.map(voteKey => (
    <VoteButtonComponent
      key={getVoteIndex(voteKey, proposalId)}
      name={getVoteIndex(voteKey, proposalId)}
      color={voteStaticParams[voteKey].color}
      label={voteStaticParams[voteKey].label}
      icon={voteStaticParams[voteKey].icon}
      rotate={voteStaticParams[voteKey].rotate}
      handleVote={() => handleVote(voteKey)}
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
      handleVote
    } = this.props;
    const voteKeys = Object.keys(voteStaticParams);

    return (
      <Vote>
        <HiddenItem as="h3">{i18next.t('proposal_vote.intro_title')}</HiddenItem>
        <HiddenItem>{i18next.t('proposal_vote.intro_text')}</HiddenItem>
        <Vote.ButtonWrapper>
          <VoteButtons
            voteKeys={voteKeys}
            proposalId={proposalId}
            hasVoted={hasVoted}
            votedKey={votedKey}
            voteStaticParams={voteStaticParams}
            handleVote={handleVote}
          />
        </Vote.ButtonWrapper>
      </Vote>
    );
  }
}

export default VoteComponent;
