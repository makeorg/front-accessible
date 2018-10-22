import React from 'react';
import ProposalCardComponent from '../../components/ProposalCard';

class ProposalCardContainer extends React.Component {
  render() {
    return (
      <ProposalCardComponent {...this.props} />
    );
  }
}

export default ProposalCardContainer;
