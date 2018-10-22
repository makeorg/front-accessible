import React from 'react';
import { connect } from 'react-redux';
import SequenceComponent from '../../components/Sequence';
import SequenceService from '../../api/SequenceService';
import { sequenceExpand } from '../../actions/sequence';

export const doDecrementCurrentIndex = prevState => ({
  currentIndex: prevState.currentIndex - 1
});

export const doIncrementCurrentIndex = prevState => ({
  counter: prevState.counter + 1
});

class SequenceContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      proposals: [],
      count: 0,
      currentIndex: 0
    };

    this.decrementCurrentIndex = this.decrementCurrentIndex.bind(this);
    this.incrementCurrentIndex = this.incrementCurrentIndex.bind(this);
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

  decrementCurrentIndex() {
    this.setState(doDecrementCurrentIndex);
  }

  incrementCurrentIndex() {
    this.setState(doIncrementCurrentIndex);
  }


  render() {
    const { proposals, count, currentIndex } = this.state;
    const { isSequenceCollapsed, handleExpandSequence } = this.props;

    return (
      <SequenceComponent
        proposals={proposals}
        count={count}
        currentIndex={currentIndex}
        isSequenceCollapsed={isSequenceCollapsed}
        handleExpandSequence={handleExpandSequence}
      />
    );
  }
}


const mapStateToProps = (state) => {
  const { isSequenceCollapsed } = state.sequence;
  const { operationId } = state.appConfig;


  return {
    isSequenceCollapsed,
    operationId
  };
};

const mapDispatchToProps = dispatch => ({
  handleExpandSequence: () => {
    dispatch(sequenceExpand());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(SequenceContainer);
