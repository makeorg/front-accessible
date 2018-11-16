/* @flow */

import React from 'react';
import { connect } from 'react-redux';
import ProposalCardComponent from '../../components/ProposalCard';

type Props = {
  proposal: Object,
  index: number,
  currentIndex: number,
  totalIndex: number,
  isPannelOpen: boolean,
  isSequenceCollapsed: boolean,
  goToPreviousCard: Function,
  goToNextCard: Function
}

const ProposalCardContainer = (props: Props) => <ProposalCardComponent {...props} />;

const mapStateToProps = (state) => {
  const { isPannelOpen } = state.pannel;
  const { isSequenceCollapsed } = state.sequence;

  return {
    isPannelOpen,
    isSequenceCollapsed
  };
};

export default connect(mapStateToProps)(ProposalCardContainer);
