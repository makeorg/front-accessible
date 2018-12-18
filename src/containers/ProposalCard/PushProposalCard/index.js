/* @flow */
import * as React from 'react';
import { connect } from 'react-redux';
import PushProposalCardComponent from '../../../components/ProposalCard/PushProposalCard';
import { getPosition, getScale, getZIndex } from '../../../helpers/sequence';

type Props = {
  configuration: Object,
  index: number,
  currentIndex: number,
  cardsCount: number,
  goToPreviousCard: Function,
  isPannelOpen: boolean,
  isSequenceCollapsed: boolean,
  skipProposalPushCard: Function
}

class PushProposalCardContainer extends React.Component<Props> {
  constructor() {
    super();
    this.focusProposalField = this.focusProposalField.bind(this);
  }

  focusProposalField() {
    const proposalInput = document.getElementById('proposal');
    if (proposalInput !== null) {
      proposalInput.focus();
    }
    return this;
  }

  render() {
    const {
      configuration,
      index,
      currentIndex,
      isPannelOpen,
      isSequenceCollapsed
    } = this.props;
    const position = getPosition(index, currentIndex);
    const scale = getScale(index, currentIndex);
    const zindex = getZIndex(index, currentIndex);
    return (
      <PushProposalCardComponent
        proposalCardParams={configuration}
        position={position}
        scale={scale}
        zindex={zindex}
        tabIndex={isPannelOpen || isSequenceCollapsed || index !== currentIndex ? -1 : 0}
        focusProposalField={this.focusProposalField}
        {...this.props}
      />
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

export default connect(mapStateToProps)(PushProposalCardContainer);
