import React from 'react';
import { connect } from 'react-redux';
import ProposalSubmitAuthentificationContainer from './Authentification';
import ProposalSubmitFormComponent from '../../components/ProposalSubmit';
import ProposalSubmitDescriptionComponent from '../../components/ProposalSubmit/Description';
import ProposalSubmitSuccessComponent from '../../components/ProposalSubmit/Success';
import { getProposalLength, getIsProposalValidLength } from '../../helpers/proposal';
import { typingProposal, submitProposal } from '../../actions/proposal';
import { sequenceCollapse } from '../../actions/sequence';
import { getToken } from '../../actions/authentification';
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

    Tracking.trackClickProposalSubmit();

    const {
      content,
      isLoggedIn,
      handleSubmitProposal,
      handleGetUserToken
    } = this.props;

    if (isLoggedIn) {
      handleSubmitProposal(content);
    } else {
      handleGetUserToken();
    }
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
      isSubmitSuccess,
      isLoggedIn,
      isSequenceCollapsed,
      isPannelOpen
    } = this.props;
    const { isTyping } = this.state;
    const isDescriptionShown = isTyping && !isSubmitSuccess && isSequenceCollapsed;
    const isAuthentificationShown = !isTyping && !isLoggedIn && isSequenceCollapsed;
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
        {isDescriptionShown ? (
          <ProposalSubmitDescriptionComponent
            key="ProposalSubmitDescriptionComponent"
            isPannelOpen={isPannelOpen}
            trackModerationText={this.trackModerationText}
            trackModerationLink={this.trackModerationLink}
          />
        ) : null}
        {(isSubmitSuccess) ? (
          <ProposalSubmitSuccessComponent
            key="ProposalSubmitSuccessComponent"
          />
        ) : null}
        {isAuthentificationShown ? (
          <ProposalSubmitAuthentificationContainer
            key="ProposalSubmitAuthentificationContainer"
          />
        ) : null}
      </ProposalSubmitWrapper>
    );
  }
}

const mapStateToProps = (state) => {
  const { isLoggedIn } = state.authentification;
  const { isSequenceCollapsed } = state.sequence;
  const { isPannelOpen } = state.pannel;
  const {
    content,
    length,
    canSubmit,
    isSubmitSuccess
  } = state.proposal;

  return {
    isLoggedIn,
    isSequenceCollapsed,
    isPannelOpen,
    content,
    length,
    canSubmit,
    isSubmitSuccess
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
  },
  handleGetUserToken: () => {
    dispatch(getToken());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(ProposalSubmit);
