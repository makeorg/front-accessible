import React from 'react';
import { connect } from 'react-redux';
import ProposalSubmitFormComponent from '../../components/ProposalSubmit';
import ProposalSubmitDescriptionComponent from '../../components/ProposalSubmit/Description';
import ProposalSubmitAuthentificationContainer from './Authentification';
import { getProposalLength, getIsProposalValidLength } from '../../helpers/proposal';
import { typingProposal, submitProposal } from '../../actions/proposal';
import { sequenceCollapse } from '../../actions/sequence';
import { ProposalSubmitWrapper } from '../../components/Elements/MainElements';

/**
 * ProposalSubmitContainer manage the proposal Submit Component business logic
 * @extends React
 */
export class ProposalSubmit extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isTyping: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const content = event.target.value;
    const length = getProposalLength(content);
    const canSubmit = getIsProposalValidLength(length);

    const { handleTypingProposal } = this.props;

    handleTypingProposal(content, length, canSubmit);
  }

  handleFocus() {
    this.setState({
      isTyping: true
    });

    const { handleCollapseSequence } = this.props;
    handleCollapseSequence();
  }

  handleSubmit(event) {
    event.preventDefault();

    this.setState({
      isTyping: false
    });

    const {
      handleSubmitProposal
    } = this.props;

    handleSubmitProposal();
  }

  render() {
    const {
      content,
      length,
      canSubmit,
      needAuthentification,
      isSequenceCollapsed,
      isPannelOpen
    } = this.props;
    const { isTyping } = this.state;

    return (
      <ProposalSubmitWrapper>
        <ProposalSubmitFormComponent
          key="ProposalSubmitFormComponent"
          content={content}
          length={length}
          canSubmit={canSubmit}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          handleFocus={this.handleFocus}
          isPannelOpen={isPannelOpen}
        />
        {(isTyping && !needAuthentification && isSequenceCollapsed) ? (
          <ProposalSubmitDescriptionComponent
            key="ProposalSubmitDescriptionComponent"
            isPannelOpen={isPannelOpen}
          />
        ) : null}
        {(needAuthentification && isSequenceCollapsed) ? (
          <ProposalSubmitAuthentificationContainer
            key="ProposalSubmitAuthentificationContainer"
          />
        ) : null}
      </ProposalSubmitWrapper>
    );
  }
}

const mapStateToProps = (state) => {
  const { operationId } = state.appConfig;
  const {
    content,
    length,
    canSubmit,
    needAuthentification
  } = state.proposal;
  const {
    isSequenceCollapsed
  } = state.sequence;
  const {
    isPannelOpen
  } = state.pannel;

  return {
    operationId,
    content,
    length,
    canSubmit,
    needAuthentification,
    isSequenceCollapsed,
    isPannelOpen
  };
};

const mapDispatchToProps = dispatch => ({
  handleCollapseSequence: () => {
    dispatch(sequenceCollapse());
  },
  handleTypingProposal: (content, length, canSubmit) => {
    dispatch(typingProposal(content, length, canSubmit));
  },
  handleSubmitProposal: (content, operationId) => {
    dispatch(submitProposal(content, operationId));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(ProposalSubmit);
