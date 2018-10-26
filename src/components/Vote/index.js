import React from 'react';
import Vote from './Styled';
import { HiddenItem } from '../Elements/HiddenElements';
import { SpaceBetweenRow } from '../Elements/FlexElements';
import { getVoteIndex } from '../../helpers/vote';
import VoteButtonComponent from './Button';

const VoteButtons = ({
  voteKeys,
  proposalIndex,
  voteStaticParams,
  handleVote
}) => (
  voteKeys.map(voteKey => (
    <VoteButtonComponent
      key={getVoteIndex(voteKey, proposalIndex)}
      name={getVoteIndex(voteKey, proposalIndex)}
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
        <Vote.Fieldset as="fieldset">
          <legend>
            <HiddenItem as="h3">Je donne mon avis sur cette proposition. </HiddenItem>
            <HiddenItem>Je suis : </HiddenItem>
          </legend>
          <SpaceBetweenRow>
            <VoteButtons
              voteKeys={voteKeys}
              proposalId={proposalId}
              hasVoted={hasVoted}
              votedKey={votedKey}
              voteStaticParams={voteStaticParams}
              handleVote={handleVote}
            />
          </SpaceBetweenRow>
        </Vote.Fieldset>
      </Vote>
    );
  }
}

export default VoteComponent;
