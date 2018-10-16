import React from 'react';
import { connect } from 'react-redux';
import ProposalSubmitComponent from '../../components/ProposalSubmit';
import { getProposalLength, getIsProposalValidLength } from '../../helpers/proposal';
import { typingProposal, submitProposal } from '../../actions/proposal';

export const doInputChange = (prevState, proposalLength, isProposalValidLength) => ({
  ...prevState,
  proposalLength,
  isProposalValidLength,
  errors: []
});

/**
 * ProposalSubmitContainer manage the proposal Submit Component business logic
 * @extends React
 */
class ProposalSubmitContainer extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const content = event.target.value;
    const length = getProposalLength(content);
    const canSubmit = getIsProposalValidLength(length);

    const { dispatch } = this.props;

    dispatch(typingProposal(content, length, canSubmit));
  }

  handleSubmit(event) {
    event.preventDefault();

    const {
      content,
      operationId,
      dispatch
    } = this.props;

    dispatch(submitProposal(content, operationId));
  }


  render() {
    const { content, length, canSubmit } = this.props;
    return (
      <ProposalSubmitComponent
        content={content}
        length={length}
        canSubmit={canSubmit}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
      />
    );
  }
}

const mapStateToProps = (state) => {
  const { operationId } = state.appConfig;
  const { content, length, canSubmit } = state.proposal;

  return {
    operationId,
    content,
    length,
    canSubmit
  };
};

export default connect(mapStateToProps)(ProposalSubmitContainer);
