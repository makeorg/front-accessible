import React from 'react';
import ProposalSubmitComponent from '../../components/ProposalSubmit';
import { PROPOSAL_LABEL, MIN_PROPOSAL_LENGTH, MAX_PROPOSAL_LENGTH } from '../../constants/proposal';

export const doInputBlur = prevState => ({
  ...prevState,
  isTyping: prevState.proposalLength > 0
});

export const doInputChange = (prevState, proposalValue) => ({
  ...prevState,
  proposalLength: (PROPOSAL_LABEL + proposalValue).length,
  errors: []
});

class ProposalSubmitContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      proposalLength: PROPOSAL_LABEL.length,
      isTyping: false,
      isProposalValidLength: false
    };
    this.isProposalValidLength = this.isProposalValidLength.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
  }

  isProposalValidLength() {
    const { proposalLength } = this.state;
    if (proposalLength >= MIN_PROPOSAL_LENGTH && proposalLength <= MAX_PROPOSAL_LENGTH) {
      this.setState({ isProposalValidLength: true });
    } else {
      this.setState({ isProposalValidLength: false });
    }
  }

  handleChange(event) {
    const proposalValue = event.target.value;
    this.setState(prevState => doInputChange(prevState, proposalValue));
  }

  handleFocus() {
    this.setState({
      isTyping: true
    });
  }

  handleBlur() {
    this.setState(doInputBlur);
  }

  render() {
    const { isTyping, proposalLength, isProposalValidLength } = this.state;
    return (
      <ProposalSubmitComponent
        proposalLength={proposalLength}
        isTyping={isTyping}
        isProposalValidLength={isProposalValidLength}
        handleChange={this.handleChange}
        handleFocus={this.handleFocus}
        handleBlur={this.handleBlur}
      />
    );
  }
}

export default ProposalSubmitContainer;
