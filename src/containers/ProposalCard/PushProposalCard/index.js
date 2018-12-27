/* @flow */
import * as React from 'react';
import { connect } from 'react-redux';
import PushProposalCardComponent from '../../../components/ProposalCard/PushProposalCard';
import { getPosition, getScale, getZIndex } from '../../../helpers/sequence';

type Props = {
  /** Object with Static properties used to configure the Final Card */
  configuration: Object,
  /** Index of the card */
  index: number,
  /** Incremented / Decremented Index */
  currentIndex: number,
  /** Total of cards */
  cardsCount: number,
  /** Method called when previous card button is clicked  */
  goToPreviousCard: Function,
  /** Method called when next card button is clicked  */
  skipProposalPushCard: Function,
  /** Boolean toggled when Sliding pannel is opened / closed */
  isPannelOpen: boolean,
  /** Boolean toggled when Sequence is collapsed / expanded */
  isSequenceCollapsed: boolean
}

/**
 * Handles Push Proposal Card Business Logic
 */
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