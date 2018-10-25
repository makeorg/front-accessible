import React from 'react';
import { connect } from 'react-redux';
import VoteComponent from '../../components/Vote';
import voteStaticParams from '../../constants/vote';

class VoteContainer extends React.Component {
  render() {
    const { proposalIndex } = this.props;
    return (
      <VoteComponent voteStaticParams={voteStaticParams} proposalIndex={proposalIndex} />
    );
  }
}

export default connect()(VoteContainer);
