import React from 'react';
import { connect } from 'react-redux';
import SequenceComponent from '../../components/Sequence';
import SequenceService from '../../api/SequenceService';
import { sequenceExpand } from '../../actions/sequence';

export const decrementCurrentIndex = prevState => ({
  currentIndex: prevState.currentIndex - 1
});

export const incrementCurrentIndex = prevState => ({
  currentIndex: prevState.currentIndex + 1
});

class SequenceContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      proposals: [],
      count: 0,
      currentIndex: 0
    };

    this.goToNextCard = this.goToNextCard.bind(this);
    this.goToPreviousCard = this.goToPreviousCard.bind(this);
  }

  componentDidMount() {
    const { operationId } = this.props;
    SequenceService.startSequence(operationId)
      .then(sequence => this.setProposals(sequence))
      .catch(error => error);
  }

  setProposals(sequence) {
    this.setState({
      proposals: sequence.proposals,
      count: sequence.proposals.length
    });
  }

  goToNextCard() {
    this.setState(incrementCurrentIndex);
  }

  goToPreviousCard() {
    this.setState(decrementCurrentIndex);
  }


  render() {
    const { proposals, count, currentIndex } = this.state;
    const { isSequenceCollapsed, handleExpandSequence, isPannelOpen } = this.props;

    return (
      <SequenceComponent
        proposals={proposals}
        count={count}
        currentIndex={currentIndex}
        isSequenceCollapsed={isSequenceCollapsed}
        handleExpandSequence={handleExpandSequence}
        isPannelOpen={isPannelOpen}
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
