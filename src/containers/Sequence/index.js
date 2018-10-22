import React from 'react';
import { connect } from 'react-redux';
import SequenceComponent from '../../components/Sequence';
import { sequenceExpand } from '../../actions/sequence';

class SequenceContainer extends React.Component {
  render() {
    const { isSequenceCollapsed, handleExpandSequence } = this.props;
    return (
      <SequenceComponent
        isSequenceCollapsed={isSequenceCollapsed}
        handleExpandSequence={handleExpandSequence}
      />
    );
  }
}


const mapStateToProps = (state) => {
  const { isSequenceCollapsed } = state.sequence;

  return {
    isSequenceCollapsed
  };
};

const mapDispatchToProps = dispatch => ({
  handleExpandSequence: () => {
    dispatch(sequenceExpand());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(SequenceContainer);
