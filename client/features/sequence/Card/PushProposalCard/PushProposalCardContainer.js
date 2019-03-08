/* @flow */
import * as React from 'react';
import { connect } from 'react-redux';
import { type PushProposalCardConfig } from 'Shared/types/card';
import { type Question } from 'Shared/types/question';
import { Tracking } from 'Shared/services/Tracking';
import { getPosition, getScale, getZIndex } from 'Shared/helpers/sequence';
import {
  selectSequenceQuestion,
  selectSequenceCollapsed,
} from 'Shared/store/selectors/sequence.selector';
import { PushProposalCardComponent } from './PushProposalCardComponent';

type Props = {
  /** Object with Dynamic properties used to configure the Sequence (questionId, country, ...) */
  question: Question,
  /** Object with Static properties used to configure the Push Proposal Card */
  configuration: PushProposalCardConfig,
  /** Index of the card */
  index: number,
  /** Incremented / Decremented Index */
  currentIndex: number,
  /** Total of cards */
  cardsCount: number,
  /** Offset of cards without pagination (introCard) */
  cardOffset: number,
  /** Method called when previous card button is clicked  */
  goToPreviousCard: Function,
  /** Method called when next card button is clicked  */
  skipProposalPushCard: Function,
  /** Boolean toggled when Sliding pannel is opened / closed */
  isPannelOpen: boolean,
  /** Boolean toggled when Sequence is collapsed / expanded */
  isSequenceCollapsed: boolean,
};

/**
 * Handles Push Proposal Card Business Logic
 */
class PushProposalCardHandler extends React.Component<Props> {
  componentDidUpdate = () => {
    const { question, index, currentIndex } = this.props;
    if (index === currentIndex) {
      Tracking.trackDisplayProposalPushCard(question.slug);
    }
  };

  focusProposalField = (): void => {
    const proposalInput = document.getElementById('proposal');
    if (proposalInput !== null) {
      proposalInput.focus();
    }
  };

  render() {
    const {
      configuration,
      index,
      currentIndex,
      isPannelOpen,
      isSequenceCollapsed,
    } = this.props;
    const position = getPosition(index, currentIndex);
    const scale = getScale(index, currentIndex);
    const zindex = getZIndex(index, currentIndex);
    const tabIndex =
      isPannelOpen || isSequenceCollapsed || index !== currentIndex ? -1 : 0;

    return (
      <PushProposalCardComponent
        configuration={configuration}
        position={position}
        scale={scale}
        zindex={zindex}
        tabIndex={tabIndex}
        focusProposalField={this.focusProposalField}
        {...this.props}
      />
    );
  }
}

const mapStateToProps = state => {
  const { isPannelOpen } = state.pannel;

  return {
    isPannelOpen,
    isSequenceCollapsed: selectSequenceCollapsed(state),
    question: selectSequenceQuestion(state),
  };
};

export const PushProposalCardContainer = connect(mapStateToProps)(
  PushProposalCardHandler
);
