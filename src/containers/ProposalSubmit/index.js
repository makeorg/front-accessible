/* @flow */

import * as React from 'react';
import { connect } from 'react-redux';
import ProposalSubmitFormComponent from 'Components/ProposalSubmit';
import ProposalSubmitDescriptionComponent from 'Components/ProposalSubmit/Description';
import ProposalSubmitSuccessComponent from 'Components/ProposalSubmit/Success';
import { getProposalLength, getIsProposalValidLength } from 'Helpers/proposal';
import { typingProposal, submitProposal } from 'Actions/proposal';
import { sequenceCollapse } from 'Actions/sequence';
import { getToken } from 'Actions/authentification';
import { ProposalSubmitWrapper } from 'Components/Elements/MainElements';
import Tracking from 'Services/Tracking';
import ProposalSubmitAuthentificationContainer from './Authentification';

type Props = {
  content: string,
  length: number,
  canSubmit: boolean,
  isSubmitSuccess: boolean,
  isLoggedIn: boolean,
  isSequenceCollapsed: boolean,
  isPannelOpen: boolean,
  handleCollapseSequence: Function,
  handleTypingProposal: Function,
  handleSubmitProposal: Function,
  handleGetUserToken: Function
};

type State = {
  isTyping: boolean
}
/**
 * ProposalSubmitContainer manage the proposal Submit Component business logic
 * @extends React
 */
export class ProposalSubmit extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      isTyping: false
    };
  }

  handleChange = (event: SyntheticEvent<*>) => {
    const content = event.currentTarget.value;
    const length = getProposalLength(content);
    const canSubmit = getIsProposalValidLength(length);

    const { handleTypingProposal } = this.props;

    handleTypingProposal(content, length, canSubmit);
  }

  handleFocus = () => {
    this.setState({
      isTyping: true
    });

    const { handleCollapseSequence, isSequenceCollapsed } = this.props;
    if (!isSequenceCollapsed) handleCollapseSequence();
  }

  handleSubmit = (event: SyntheticEvent<*>) => {
    event.preventDefault();

    Tracking.trackClickProposalSubmit();

    const {
      content,
      isLoggedIn,
      handleSubmitProposal,
      handleGetUserToken
    } = this.props;

    if (isLoggedIn) {
      handleSubmitProposal(content).then(() => {
        this.setState({
          isTyping: false
        });
      });
    } else {
      handleGetUserToken()
        .then(() => {
          this.setState({
            isTyping: false
          });
        })
        .catch(() => {
          this.setState({
            isTyping: false
          });
        });
    }
  }

  trackModerationText = () => {
    Tracking.trackDisplayModerationText();
    return this;
  }

  trackModerationLink = () => {
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
    const isSuccessShown = !isTyping && isSubmitSuccess && isSequenceCollapsed;
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
        {(isSuccessShown) ? (
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
  handleCollapseSequence: () => (
    dispatch(sequenceCollapse())
  ),
  handleTypingProposal: (content: string, length: number, canSubmit: boolean) => (
    dispatch(typingProposal(content, length, canSubmit))
  ),
  handleSubmitProposal: (content: string) => (
    dispatch(submitProposal(content))
  ),
  handleGetUserToken: () => (
    dispatch(getToken())
  )
});

export default connect(mapStateToProps, mapDispatchToProps)(ProposalSubmit);
