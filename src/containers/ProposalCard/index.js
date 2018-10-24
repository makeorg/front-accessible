import React from 'react';
import { connect } from 'react-redux';
import ProposalCardComponent from '../../components/ProposalCard';

class ProposalCardContainer extends React.Component {
  render() {
    return (
      <ProposalCardComponent {...this.props} />
    );
  }
}

const mapStateToProps = (state) => {
  const { isPannelOpen } = state.pannel;
  const { isSequenceCollapsed } = state.sequence;

  return {
    isPannelOpen,
    isSequenceCollapsed
  };
};

export default connect(mapStateToProps)(ProposalCardContainer);
