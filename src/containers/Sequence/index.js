/* @flow */

import * as React from 'react';
import { connect } from 'react-redux';
import SequenceComponent from '../../components/Sequence';
import SequenceService from '../../api/SequenceService';
import { sequenceExpand } from '../../actions/sequence';
import Tracking from '../../services/Tracking';

export const decrementCurrentIndex = (prevState: Object) => ({
  currentIndex: prevState.currentIndex - 1
});

export const incrementCurrentIndex = (prevState: Object) => ({
  currentIndex: prevState.currentIndex + 1
});

type Props = {
  operationId: string,
  isSequenceCollapsed: boolean,
  isPannelOpen: boolean,
  handleExpandSequence: Function,
};

type State = {
  proposals: Array<Object>,
  count: number,
  currentIndex: number
};

class SequenceContainer extends React.Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      proposals: [],
      count: 0,
      currentIndex: 0
    };

    this.goToNextCard = this.goToNextCard.bind(this);
    this.goToPreviousCard = this.goToPreviousCard.bind(this);
    this.handleStartSequence = this.handleStartSequence.bind(this);
    this.expandSequence = this.expandSequence.bind(this);
  }

  componentDidMount = () => {
    const { operationId } = this.props;
    SequenceService.startSequence(operationId)
      .then(sequence => this.setProposals(sequence))
      .catch(error => error);
  }

  setProposals = (sequence) => {
    this.setState({
      proposals: sequence.proposals,
      count: sequence.proposals.length
    });
  }

  handleStartSequence = () => {
    this.setState(incrementCurrentIndex);
    Tracking.trackClickStartSequence();
  }

  goToNextCard = () => {
    this.setState(incrementCurrentIndex);
    Tracking.trackClickNextCard();
  }

  goToPreviousCard = () => {
    this.setState(decrementCurrentIndex);
    Tracking.trackClickPreviousCard();
  }

  expandSequence = () => {
    const { handleExpandSequence } = this.props;
    handleExpandSequence();
  }


  render() {
    const { proposals, count, currentIndex } = this.state;
    const { isSequenceCollapsed, isPannelOpen } = this.props;

    return (
      <SequenceComponent
        proposals={proposals}
        count={count}
        currentIndex={currentIndex}
        isSequenceCollapsed={isSequenceCollapsed}
        handleExpandSequence={this.expandSequence}
        isPannelOpen={isPannelOpen}
        handleStartSequence={this.handleStartSequence}
        goToNextCard={this.goToNextCard}
        goToPreviousCard={this.goToPreviousCard}
      />
    );
  }
}


const mapStateToProps = (state) => {
  const { isSequenceCollapsed } = state.sequence;
  const { operationId } = state.appConfig;
  const { isPannelOpen } = state.pannel;


  return {
    isSequenceCollapsed,
    operationId,
    isPannelOpen
  };
};

const mapDispatchToProps = dispatch => ({
  handleExpandSequence: () => {
    dispatch(sequenceExpand());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(SequenceContainer);
