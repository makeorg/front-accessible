import React from 'react';
import { connect } from 'react-redux';
import VoteService from '../../api/VoteService';
import VoteComponent from '../../components/Vote';
import voteStaticParams from '../../constants/vote';

class VoteContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasVoted: false,
      votedKey: null
    };

    this.handleVote = this.handleVote.bind(this);
  }

  handleVote(voteKey) {
    const { proposalId } = this.props;
    const { hasVoted } = this.state;
    if (hasVoted) {
      VoteService.unvote(proposalId, voteKey)
        .then(() => {
          this.setState({
            hasVoted: false,
            votedKey: null
          });
        });
    } else {
      VoteService.vote(proposalId, voteKey)
        .then((result) => {
          this.setState({
            hasVoted: true,
            votedKey: result.voteKey
          });
        });
    }
  }

  render() {
    const { proposalId } = this.props;
    const { hasVoted, votedKey } = this.state;
    return (
      <VoteComponent
        voteStaticParams={voteStaticParams}
        proposalId={proposalId}
        hasVoted={hasVoted}
        votedKey={votedKey}
        handleVote={this.handleVote}
      />
    );
  }
}

export default connect()(VoteContainer);
