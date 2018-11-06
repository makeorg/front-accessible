import React from 'react';
import { connect } from 'react-redux';
import ProposalSubmitAuthentificationContainer from './Authentification';
import ProposalSubmitFormComponent from '../../components/ProposalSubmit';
import ProposalSubmitDescriptionComponent from '../../components/ProposalSubmit/Description';
import ProposalSubmitSuccessComponent from '../../components/ProposalSubmit/Success';
import { getProposalLength, getIsProposalValidLength } from '../../helpers/proposal';
import { typingProposal, submitProposal } from '../../actions/proposal';
import { sequenceCollapse } from '../../actions/sequence';
import { ProposalSubmitWrapper } from '../../components/Elements/MainElements';
import Tracking from '../../services/Tracking';

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
    this.trackModerationText = this.trackModerationText.bind(this);
    this.trackModerationLink = this.trackModerationLink.bind(this);
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

    const { handleSubmitProposal, operationId, content } = this.props;

    handleSubmitProposal(content, operationId);

    Tracking.trackClickProposalSubmit();
  }

  trackModerationText() {
    Tracking.trackDisplayModerationText();
    return this;
  }

  trackModerationLink() {
    Tracking.trackClickModerationLink();
    return this;
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
            trackModerationText={this.trackModerationText}
            trackModerationLink={this.trackModerationLink}
          />
        ) : null}
        {(needAuthentification && isSequenceCollapsed) ? (
          <ProposalSubmitAuthentificationContainer
            key="ProposalSubmitAuthentificationContainer"
          />
        ) : null}
        {(isSequenceCollapsed && !isTyping && !needAuthentification) ? (
          <ProposalSubmitSuccessComponent
            key="ProposalSubmitSuccessComponent"
          />
        ) : null}
      </ProposalSubmitWrapper>
    );
  }
}

const mapStateToProps = (state) => {
  const { operationId } = state.appConfig;
  const { isSequenceCollapsed } = state.sequence;
  const { isPannelOpen } = state.pannel;
  const {
    content,
    length,
    canSubmit,
    needAuthentification
  } = state.proposal;

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
