import React from 'react';
import VoteResults from './Styled';
import VoteButtonComponent from '../Button';
import { UnvoteButton } from '../Styled/Button';

class VoteResultComponent extends React.Component {
  render() {
    const {
      voteStaticParams,
      votedKey,
      handleVote
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
        />
      </VoteResults>
    );
  }
}

export default VoteResultComponent;
